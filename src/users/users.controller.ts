import { Controller, Get, Param, Post,Body, Patch, Delete,Query } from '@nestjs/common';
// import { get } from 'http';

@Controller('users')
export class UsersController {
    /*
    GET /users
    GET /users/:id

    POST /users
    PATCH /users/:id

    DELETE /users/:id
    */

    @Get() // GET /users or /users?role=value we use@Query and inside theis we saw i ? mark which it is optionall in nature
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'MANAGER'){
        return []
    }

    @Get('interns') //GET /users/interns
    findAllInterns(){
        return []
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //     return []
    // }

    @Post() //POST /users
    create(@Body() user:{}){
        return user
    }

    @Patch(':id') //PATCH /users/:id
    update(@Param('id') id: string, @Body() updateUser: {}){
        return {
            id,
           ...updateUser
        }
    }

    @Delete(':id') //DELETE /users/:id
    remove(@Param('id') id: string){
        return {
            id
        }
    } 

}

// patch is used for update only one field of the object not the whole object
