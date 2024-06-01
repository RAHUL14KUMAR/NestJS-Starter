import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    controllers:[UsersController],
    // initially it was an empty array but after add the user controller it include the user controller automatically
    providers:[UsersService],
})
export class UsersModule {}
