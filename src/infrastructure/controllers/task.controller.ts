import { TaskUseCases } from "../../application/use-cases/task-usecases";
import { Request, Response } from "express";
import { TaskEntity } from "../../domain/entities/task.entity";
import { BaseResponse } from "../../domain/dtos/base.response";

export class TaskController {
  constructor(private readonly taskUseCases: TaskUseCases) {}

  async createTask(request: Request, response: Response) {
    try {
      const task = await this.taskUseCases.create(request.body);
      const responseTask = new BaseResponse(true, "Task created", task);
      response.status(201).json(responseTask);
    } catch (error) {
      const responseTask = new BaseResponse(false, "Error", null);
      response.status(500).json(responseTask);
    }
  }

  async updateTask(request: Request, response: Response) {
    try {
      const task = await this.taskUseCases.update(request.body);
      const responseTask = new BaseResponse(true, "Task updated", task);
      response.status(200).json(responseTask);
    } catch (error) {
      const responseTask = new BaseResponse(false, "Error", null);
      response.status(500).json(responseTask);
    }
  }

  async deleteTask(request: Request, response: Response) {
    try {
      // const task = await this.taskUseCases.delete(request.body.id);
      const responseTask = new BaseResponse(true, "Task deleted", null);
      response.status(200).json(responseTask);
    } catch (error) {
      const responseTask = new BaseResponse(false, "Error", null);
      response.status(500).json(responseTask);
    }
  }

  async getTask(request: Request, response: Response) {
    try {
      const responseTask = new BaseResponse(true, "Task found", request.body);
      response.status(200).json(responseTask);
    } catch (error) {
      const responseTask = new BaseResponse(false, "Error", null);
      response.status(500).json(responseTask);
    }
  }

}