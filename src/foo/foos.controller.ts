import { Controller, Get, Param, Post } from '@nestjs/common';
import { FoosService } from './foos.service';

@Controller('foos')
export class FoosController {
  constructor(private readonly foosService: FoosService) {}

  @Get(':name')
  findByName(@Param('name') name: string) {
    return this.foosService.findByName(name);
  }

  @Post('create-collection')
  createCollection() {
    return this.foosService.createCollection();
  }

  @Post('create-name-index')
  createNameIndex() {
    return this.foosService.createNameIndex();
  }

  @Post('drop-name-index')
  dropNameIndex() {
    return this.foosService.dropNameIndex();
  }
}
