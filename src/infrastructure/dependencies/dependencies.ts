import { TaskController } from "../controllers/task.controller";
import { TaskUseCases } from "../../application/use-cases/task-usecases";
import { DBTaskRepository } from "../repositories/db-task-repository";

const mySqlTaskRepository = new DBTaskRepository();

const createTaskUseCase = new TaskUseCases(mySqlTaskRepository);
export const taskController = new TaskController(createTaskUseCase);