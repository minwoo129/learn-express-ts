import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { TodoItemType } from "../types/todo";

const router = Router();

router.post("/", (req, res, next) => {
  res.status(StatusCodes.OK).json({
    title: "test1",
    id: 1,
    date: "2026-01-01T13:50:00",
  } as TodoItemType);
});

router.route("/:id").get((req, res) => {
  res.status(StatusCodes.OK).json({
    title: "test1",
    id: 1,
    date: "2026-01-01T13:50:00",
  } as TodoItemType);
});

export default router;
