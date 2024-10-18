
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Foo } from './schemas/foo.schema';

@Injectable()
export class FoosService {
  constructor(@InjectModel(Foo.name) private fooModel: Model<Foo>) {}

  findByName(name: string): Promise<Foo> {
    return this.fooModel.findOne({ name }).exec();
  }

  findAll(): Promise<Foo[]> {
    return this.fooModel.find().limit(10).exec();
  }
}
