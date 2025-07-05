import { Schema, Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export interface User {
  _id: string;
  uuid: string;
  firstname: string;
  lastname: string;
  email: string;
  phone?: string;
  address?: string;
  verified: boolean;
  password: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export type UserDocument = User & Document;

export const UserSchema = new Schema<UserDocument>(
  {
    uuid: { type: String, default: uuidv4, unique: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: { type: String, trim: true },
    address: { type: String },
    verified: { type: Boolean, default: false },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true, trim: true },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);
