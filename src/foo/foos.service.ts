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

  async createCollection() {
    if ((await this.fooModel.countDocuments()) > 0) {
      await this.fooModel.collection.drop();
    }

    let foosCount = 0;
    const foosTargetCount = 10 ** 7;

    while (foosCount < foosTargetCount) {
      const data = Array.from({ length: 5000 }, () => new Foo());
      const foos = await this.fooModel.insertMany(data);
      foosCount += foos.length;
    }

    return foosCount;
  }

  async createNameIndex() {
    await this.fooModel.createIndexes();
  }

  async dropNameIndex() {
    await this.fooModel.collection.dropIndex('name_1');
  }
}
