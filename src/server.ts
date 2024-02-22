import express from "express";
import { router as taskRouter } from "./infrastructure/routes/task.routes";

const bootstrap = async () => {
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use("/api/v1/tasks", taskRouter);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

bootstrap();
