import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { TodoItemType } from "../types/todo";

const router = Router();

/**
 * @swagger
 * /todo:
 *   post:
 *     summary: Todo 생성
 *     responses:
 *       200:
 *         description: 성공
 */
router.post("/", (req, res, next) => {
  res.status(StatusCodes.OK).json({
    title: "test1",
    id: 1,
    date: "2026-01-01T13:50:00",
  } as TodoItemType);
});

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Todo 조회
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: 성공
 */
router.route("/:id").get((req, res) => {
  res.status(StatusCodes.OK).json({
    title: "test1",
    id: 1,
    date: "2026-01-01T13:50:00",
  } as TodoItemType);
});

export default router;
