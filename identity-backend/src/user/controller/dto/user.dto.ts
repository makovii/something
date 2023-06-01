import { Auth } from "../../../auth/repository/auth.model";

export class UserDto {
  auth_id: Auth;
  name: string;
  email: string;
  balance: number;
  currency: string;
}
