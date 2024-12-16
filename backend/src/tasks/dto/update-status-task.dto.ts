import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEnum, } from 'class-validator';
import { Status } from '../enums/status.enum';


export class UpdateStatusTaskDto {
    @ApiProperty({ description: 'Status da tarefa' })
    @IsEnum(Status, {message: "Status must be one of: peding, in_progress, completed"})
    @IsNotEmpty()
    status: Status;
}
