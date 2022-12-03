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
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('items')
@Controller('items')
export class ItemsController {
    constructor(private readonly itemService: ItemsService) { }
    // Express way
    //   @Get()
    //   findAll(@Req() req: Request, @Res() res: Response): Response {
    //     console.log(req.url);
    //     return res.send('Get all Items..');
    //   }

    // Nest way: more preffered
    @Get()
    async findAll(): Promise<Item[]> {
        return await this.itemService.findAll();
    }

    // get params fromm request
    // instead on req.params.id we do it like params.id
    @Get(':id')
    async findOne(@Param('id') id): Promise<Item> {
        return await this.itemService.findOne(id);
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemService.create(createItemDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemService.delete(id);
    }

    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemService.update(id, updateItemDto);
    }
}
