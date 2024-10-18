
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { randomBytes } from 'crypto';
import { HydratedDocument } from 'mongoose';

export type FooDocument = HydratedDocument<Foo>;

@Schema()
export class Foo {
  @Prop({
    default: () => randomBytes(8).toString('hex'),
    unique: true,
    required: true,
  })
  name: string;
}

export const FooSchema = SchemaFactory.createForClass(Foo);
