import { Model, ObjectId } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) { }

  create(createCatDto: CreateCatDto) {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  findAll() {
    return this.catModel.find().exec();
  }

  findOne(_id: ObjectId) {
    return this.catModel
      .findOne({
        _id,
      })
      .exec();
  }

  update(_id: ObjectId, params: UpdateCatDto) {
    return this.catModel.updateOne(
      {
        _id,
      },
      {
        ...params,
      },
    );
  }

  remove(_id: ObjectId) {
    return this.catModel.deleteOne({
      _id,
    });
  }
}
