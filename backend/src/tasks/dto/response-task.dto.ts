import { Task } from '@prisma/client';
import { Status } from '../enums/status.enum';


export class ResponseTaskDto {
    id: number;
    title: string;
    description: string;
    status: string;
    createdAt: Date;
    updatedeAt: Date;

    constructor(task: Task) {
        this.id = task.id;
        this.title = task.title;
        this.description = task.description;
        this.status = task.status;
        this.createdAt = task.createdAt;
        this.updatedeAt = task.updatedAt;
    }
}
