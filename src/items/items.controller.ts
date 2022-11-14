import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Req,
  Res,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from 'express';

@Controller('items')
export class ItemsController {
  // Express way
  @Get()
  findAll(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('Get all Items..');
  }

  // Nest way: more preffered
  @Post()
  create(@Body() createItemDto: CreateItemDto): string {
    return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, quantity: ${createItemDto.qty}`;
  }

  // get params fromm request
  // instead on req.params.id we do it like params.id
  @Get(':id')
  findOne(@Param('id') id) {
    return `Item ${id}`
  }

  @Delete(':id')
  delete(@Param('id') id): string {
    return `Delete ${id}`
  }
}
