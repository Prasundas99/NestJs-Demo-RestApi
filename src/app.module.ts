import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { ItemModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose'
import keys from './config/keys';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ItemModule, ConfigModule.forRoot(), MongooseModule.forRoot(keys.mongoURI)],
  controllers: [AppController, ItemsController],
  providers: [AppService, ItemsService],
})
export class AppModule { }
