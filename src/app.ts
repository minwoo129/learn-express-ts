import { NextFunction } from "connect";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import session from "express-session";
import morgan from "morgan";
import path from "path";

import todoRouter from "./routes/todo";

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 3000);

app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session-cookie",
  }),
);

app.use("/todo", todoRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("모든 요청에 다 실행됩니다.");
  next();
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기중");
});
