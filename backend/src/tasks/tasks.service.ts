import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Status } from './enums/status.enum';
import { ResponseTaskDto } from './dto/response-task.dto';
import { UpdateStatusTaskDto } from './dto/update-status-task.dto';

@Injectable()
export class TasksService {

  constructor(readonly prisma: PrismaService){}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    if (!createTaskDto || !createTaskDto.title) {
      throw new HttpException("Title required!", HttpStatus.BAD_REQUEST);
    }
    return await this.prisma.task.create({data: createTaskDto});
  }

  async findAll(page: number, items: number): Promise<Task[]> {
    const skip = Number((page - 1) * items);
    const take = Number(items);
    return await this.prisma.task.findMany({skip, take});
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({where: {id}})
    if (!task) {
      throw new HttpException("Task not found!", HttpStatus.NOT_FOUND);
    }
    return task;
  }

  async update(id: number, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.prisma.task.findUnique({where: {id}})
    if (!task) {
      throw new HttpException("Task not found!", HttpStatus.NOT_FOUND);
    }
    const taskUpdated = await this.prisma.task.update({data : updateTaskDto, where : {id}});
    return taskUpdated;
  }

  async remove(id: number): Promise<void> {
    const task = await this.prisma.task.findUnique({where: {id}})
    if (!task) {
      throw new HttpException("Task not found!", HttpStatus.NOT_FOUND);
    }
    await this.prisma.task.delete({where: {id}});
  }

  async updateStatus(id: number, dto: UpdateStatusTaskDto): Promise<ResponseTaskDto> {
    const task = await this.prisma.task.findUnique({where: {id}})
    if (!task) {
      throw new HttpException("Task not found!", HttpStatus.NOT_FOUND);
    }
    if (!Object.values(Status).includes(dto.status)){
      throw new HttpException("Status must be one of: peding, in_progress, completed", HttpStatus.BAD_REQUEST);
    }
    (await task).status = dto.status;
    return new ResponseTaskDto(await this.prisma.task.update({data : task, where : {id}}));
  }

}
