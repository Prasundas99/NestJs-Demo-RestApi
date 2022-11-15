import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose'
@Injectable()
export class ItemsService {
    // hardcoded
    // private readonly items: Item[] = [
    //     {
    //         id: "15ffd",
    //         name: "",
    //         qty: 5,
    //         description: "fnfdjffg"
    //     },
    //     {
    //         id: "15ffd",
    //         name: "",
    //         qty: 5,
    //         description: "fnfdjffg"
    //     },
    //     {
    //         id: "15ffd",
    //         name: "",
    //         qty: 5,
    //         description: "fnfdjffg"
    //     },
    // ]

    // from database
    constructor(@InjectModel('Item') private readonly ItemModel:Model<Item>){}
    
    async findAll(): Promise<Item[]> {
        return await this.ItemModel.find();
    }

    async findOne(id: string): Promise<Item> {
        return await this.ItemModel.findById({_id: id});
    }
}
