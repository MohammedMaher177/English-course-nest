/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SessionDocument = HydratedDocument<Session>;
@Schema()
export class Session {
  @Prop({ required: true })
  date: Date;
  @Prop({ required: true })
  images: [string];
  @Prop({ required: true })
  videos: [string];
  @Prop({ required: true })
  songs: [string];
  @Prop({ required: true })
  docs: [string];
  @Prop({ required: true })
  PDFs: [string];
}
export const SessionSchema = SchemaFactory.createForClass(Session);
