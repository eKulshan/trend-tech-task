import { Controller, Get, Param } from '@nestjs/common';
import { FoosService } from './foos.service';

@Controller('foos')
export class FoosController {
  constructor(private readonly foosService: FoosService) {}

  @Get(':name')
  findByName(@Param('name') name: string) {
    return this.foosService.findByName(name);
  }

  @Get()
  findAll() {
    return this.foosService.findAll();
  }
}
