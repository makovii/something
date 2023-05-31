import { Provider } from "@nestjs/common";
import { UserRepository } from "./customer.repository";


export const UserRepoProvider: Provider = {
    provide: 'UsereRepo',
    useClass: UserRepository,
}
