import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "15ffd",
            name: "",
            qty: 5,
            description: "fnfdjffg"
        },
        {
            id: "15ffd",
            name: "",
            qty: 5,
            description: "fnfdjffg"
        },
        {
            id: "15ffd",
            name: "",
            qty: 5,
            description: "fnfdjffg"
        },
    ]

    findAll(): Item[] {
        return this.items;
    }

    findOne(id: string): Item {
        return this.items.find(item => item.id === id);
    }
}
