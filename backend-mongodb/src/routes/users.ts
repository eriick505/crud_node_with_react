import { Router } from "express";
import getUsersData from "../controllers/users/getUsersData";

// import createUserData from "../controllers/users/createUserData.js";
// import editUserById from "../controllers/users/editUserById.js";
// import getUserByToken from "../controllers/users/getUserByToken.js";

// import getUsersData from "../controllers/users/getUsersData.js";

// import signup from "../controllers/users/signUp.js";
// import login from "../controllers/users/login.js";

const userRouter = Router();

userRouter.get("/all-users", getUsersData);
// userRouter.get("/:id", getUserById); NÃO EXISTE MAIS

// userRouter.put("/:id", editUserById);
// userRouter.post("/create-user", createUserData);

// userRouter.post("/signup", signup);
// userRouter.post("/login", login);
// userRouter.post("/get-user", getUserByToken);

export default userRouter;