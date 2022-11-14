import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';


// Encapsulating item modules
@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemModule {}
