import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users=[
        {
          "id": 1,
          "name": "Alice Smith",
          "email": "alice@example.com",
          "role": "ADMIN"
        },
        {
          "id": 2,
          "name": "Bob Johnson",
          "email": "bob@example.com",
          "role": "INTERN"
        },
        {
          "id": 3,
          "name": "Charlie Brown",
          "email": "charlie@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 4,
          "name": "David Lee",
          "email": "david@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 5,
          "name": "Emma Davis",
          "email": "emma@example.com",
          "role": "ADMIN"
        },
        {
          "id": 6,
          "name": "Frank Wilson",
          "email": "frank@example.com",
          "role": "INTERN"
        },
        {
          "id": 7,
          "name": "Grace Taylor",
          "email": "grace@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 8,
          "name": "Henry Martinez",
          "email": "henry@example.com",
          "role": "ENGINEER"
        },
        {
          "id": 9,
          "name": "Ivy Rodriguez",
          "email": "ivy@example.com",
          "role": "ADMIN"
        },
        {
          "id": 10,
          "name": "Jack Anderson",
          "email": "jack@example.com",
          "role": "INTERN"
        }
    ]

    findAll(role?: 'ADMIN' | 'INTERN' | 'ENGINEER'){
        if(role){
            return this.users.filter(user=>user.role===role)
        }
        return this.users
    }

    findOne(id: string){
        return this.users.find(user=>user.id===parseInt(id))
    }

    create(user: {name:string,email:string,role:'ADMIN' | 'INTERN' | 'ENGINEER'}){
        const userByHighestId=[...this.users].sort((a,b)=>b.id-a.id)

        const newUsers={
            id: userByHighestId[0].id+1,
            ...user
        }
        this.users.push(newUsers)

        return newUsers;
    }

    update(id: string, updateUser: {name?:string,email?:string,role?:'ADMIN' | 'INTERN' | 'ENGINEER'}){
        this.users=this.users.map(user=>{
            if(user.id===parseInt(id)){
                return {
                   ...user,
                   ...updateUser
                }
            }
            return user
        })

        return this.findOne(id)
    }

    delete(id: string){
        const removedUser=this.findOne(id);

        this.users=this.users.filter(user=>user.id!==parseInt(id))

        return removedUser;
    }
      
}
