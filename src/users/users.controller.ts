import { Controller, Get, Param, Post,Body, Patch, Delete,Query,ParseIntPipe, ValidationPipe } from '@nestjs/common';
// import { get } from 'http';
import { UsersService } from './users.service';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService){}
    /*
    GET /users
    GET /users/:id

    POST /users
    PATCH /users/:id

    DELETE /users/:id
    */

    @Get() // GET /users or /users?role=value we use@Query and inside theis we saw i ? mark which it is optionall in nature

    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        return this.usersService.findAll(role)
    }

    @Get('interns') //GET /users/interns
    findAllInterns(){
        return []
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id',ParseIntPipe) id: string){
        return this.usersService.findOne(id)
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //     return []
    // }

    @Post() //POST /users
    create(@Body(ValidationPipe) user:CreateUserDto){
        return this.usersService.create(user)
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id',ParseIntPipe) id: string, @Body(ValidationPipe) updateUser: UpdateUserDto){
        return this.usersService.update(id,updateUser)
    }

    @Delete(':id') //DELETE /users/:id
    remove(@Param('id',ParseIntPipe) id: string){
        return this.usersService.delete(id)
    } 

}

// patch is used for update only one field of the object not the whole object
