import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Auth } from '../../auth/repository/auth.model';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  
  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Auth'
  })
  auth_id: Auth;

  @Prop({ })
  phone: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
