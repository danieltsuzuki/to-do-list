import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateStatusTaskDto } from './dto/update-status-task.dto';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(readonly tasksService: TasksService) { }

  @ApiOperation({ summary: 'Criar uma nova tarefa' })
  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }

  @ApiQuery({name: 'page', type: Number, required: true, example: 1})
  @ApiQuery({name: 'items', type: Number, required: true, example: 10})
  @ApiOperation({ summary: 'Obter todas as tarefas' })
  @Get()
  async findAll(@Query('page', ParseIntPipe) page: number, @Query('items', ParseIntPipe) items: number) {
    return this.tasksService.findAll(page, items);
  } 

  @ApiOperation({ summary: 'Obter uma tarefa por ID' })
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.tasksService.findOne(+id);
  }

  @ApiOperation({ summary: 'Atualizar uma tarefa por ID' })
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTaskDto: UpdateTaskDto) {
    return this.tasksService.update(+id, updateTaskDto);
  }

  @ApiOperation({ summary: 'Atualizar o status da tarefa' })
  @Patch(":id/status")
  async updateStatus(@Param('id') id: number, @Body() updateStatusTaskDto: UpdateStatusTaskDto) {
    return this.tasksService.updateStatus(+id, updateStatusTaskDto);
  }

  @ApiOperation({ summary: 'Remover uma tarefa por ID' })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    this.tasksService.remove(+id);
  }

}
