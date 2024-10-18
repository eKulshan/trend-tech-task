import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FoosController } from './foos.controller';
import { FoosService } from './foos.service';
import { Foo, FooSchema } from './schemas/foo.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Foo.name, schema: FooSchema }])],
  controllers: [FoosController],
  providers: [FoosService],
})
export class FoosModule {}