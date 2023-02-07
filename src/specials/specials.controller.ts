import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SpecialsService } from './specials.service';

@Controller('specials')
export class SpecialsController {
  constructor(private readonly specialsService: SpecialsService) {}

  @Post()
  create() {
    return this.specialsService.create();
  }

  @Get()
  findAll() {
    return this.specialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.specialsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.specialsService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.specialsService.remove(+id);
  }
}
