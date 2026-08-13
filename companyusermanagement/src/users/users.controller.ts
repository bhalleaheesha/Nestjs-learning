import { Controller, Get, Param } from '@nestjs/common';
import { identity } from 'rxjs';

@Controller('users') //users
export class UsersController {
    /*
    GET /users
    GET /users/:id
    POST /users
    PATCH /users/:id
    DELETE /users/:id
    */

    @Get() //GET Users
    findAll() {
        return []
    }

    @Get(':id') //Get /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }

    @Get('interns') //GET /users/interns
    findAllInterns(){
        return []
    }
}
