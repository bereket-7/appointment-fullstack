import { Schema } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export const UserSchema = new Schema(
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
