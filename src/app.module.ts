import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FoosController } from './foo/foos.controller';
import { FoosModule } from './foo/foos.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://admin:password@localhost:27017/trend_task?authSource=admin'), FoosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
