const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv").config(); // 다른 모듈보다 먼저 실행

const port = process.env.PORT || 5173; // 환경 변수가 없으면 기본값 3333 사용

const corsOptions = {
  origin: "http://localhost:3000", // 프론트엔드 주소
  credentials: true,
};
app.use(cors(corsOptions));

// 로깅 미들웨어
app.use((req, res, next) => {
  console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  if (
    req.method === "POST" ||
    req.method === "PUT" ||
    req.method === "DELETE"
  ) {
    console.log("Body:", req.body);
  }
  next();
});

app.use(express.json());
app.use(cookieParser());

const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
const todosRouter = require("./routes/todos");
const teamsRouter = require("./routes/teams");

app.use("/users", userRouter);
app.use("/todos", todosRouter);
app.use("/teams", teamsRouter);
app.use("/", indexRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
