import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@mongo:27017/'),
    CatsModule,
  ],
  // imports: [CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
