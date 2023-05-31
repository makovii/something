import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema({ timestamps: true })
export class Auth {
  
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  password: string;

}

export const AuthSchema = SchemaFactory.createForClass(Auth);