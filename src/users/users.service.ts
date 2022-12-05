import { Injectable } from '@nestjs/common';

export type User = {
    id: number;
    username: string;
    name: string;
    password: string;
}
@Injectable()
export class UsersService {
    private readonly users: User[] = [
        {
            id: 1,
            username: 'john',
            name: 'John Doe',
            password: 'changeme',
        },
        {
            id: 2,
            username: 'maria',
            name: 'Maria Jones',
            password: 'guess',
        },
        {
            id: 3,
            username: 'a',
            name: 'a',
            password: 'a',
        },
    ];

    async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
    }

}
