import { Provider } from "@nestjs/common";
import { AuthRepository } from "./auth.repository";


export const AuthRepoProvider: Provider = {
    provide: 'AuthRepo',
    useClass: AuthRepository,
}