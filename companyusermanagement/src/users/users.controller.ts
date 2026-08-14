import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('users') //users
export class UsersController {
    
    @Get() //GET /Users or /users?role=value
    findAll(@Query('role') role?: 'INTER' | 'SOFTWARE ENGINEER' | 'ADMIN') 
    {
        return []
    }

    @Get(':id') //Get /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    // @Get('interns') //GET /users/interns
    // findAllInterns(){
    //     return []
    // }

    @Post() //POST /users
    create(@Body() user: {}) {
        return user
    }

    @Patch(':id') //patch /users/:id
    update(@Param ('id') id: string, @Body() userUpdate: {}) {
        return { id, ...userUpdate}
    }

    @Delete(':id') //DELETE /users/:id
    delete(@Param('id') id: string){
        return {id}
    }
}