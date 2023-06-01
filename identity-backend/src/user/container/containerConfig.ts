import "reflect-metadata";
import { Container } from 'inversify';
import { UserService } from "../service/user.service";
import { UserController } from "../controller/user.controller";
import { CONTAINER_TYPES } from "./TYPES";

export const container = new Container();


// Services
container.bind<UserService>(CONTAINER_TYPES.UserService).to(UserService);

// Controllers
container.bind<UserController>(CONTAINER_TYPES.UserController).to(UserController);
