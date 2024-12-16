import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';


export class CreateTaskDto {
    @ApiProperty({ description: 'Titulo da tarefa' })
    @IsString()
    title: string;

    @ApiProperty({ description: 'Descrição da tarefa', required: false })
    @IsString()
    @IsOptional()
    description?: string;
}
