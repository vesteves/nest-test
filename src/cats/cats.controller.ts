import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) { }

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll() {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') _id: ObjectId) {
    return this.catsService.findOne(_id);
  }

  @Patch(':id')
  update(@Param('id') _id: ObjectId, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(_id, updateCatDto);
  }

  @Delete(':id')
  remove(@Param('id') _id: ObjectId) {
    return this.catsService.remove(_id);
  }
}
