#  command to install the nest js
npm i -g @nestjs/cli

# create the new folder
nest new folderName

# inside the folder if we want to start the server
npm run start:dev

#inside the folder we want to add new module call userModule
nest g module users

# inside the user folser if we want to add new controllers how we can do that
nest g controller users


# inside the user folser if we want to add new services how we can do that
nest g service users



controllers part
# controllers is responsible for handlingg the incoming requests and returning responses to the client
# in order to create a basic cotrollers we use classes and decorators
# decorators associated with classes with required meta data and enable nest to create a routing map(tie request to the controller)

provider part
# object can create various relationships with other objects.and function of wiring up this object can largely be delegated to ythe nes run time


DTO(data transfer object)
# through this we add the validation just like we set interface in typescript

# we also add the validation in the schema thing llike emai have validation called ISEMAIL similarly for enum it hase ISEnum()

Global modules
#if we want to impor tthe same set of modules every where ten we use global providers

nest g resource folderName
# this command will open alloe me to make coonection with restapi,graphql,websockets



# in this application hwow we can setup RESTAPI in NESTJS

# first use want to connect to dsatabase here we use prissma and inside the prisma we add the schema

#  exports:[DatabaseService] ADD THIS IN THE DATABASE MODULE FOLDER

# add the following in the database service folder
# import { Injectable,OnModuleInit } from '@nestjs/common';
# import { PrismaClient } from '@prisma/client';
# @Injectable()
# export class DatabaseService extends PrismaClient implements OnModuleInit{
#     async onModuleInit() {
#         await this.$connect()
#     }
# }


# inside the emplorees we crete an resouces of restapi by calling last code function

# inside the employees resources add the datbase module by importing 
# import { DatabaseModule } from 'src/database/database.module';

# @Module({
#   imports:[DatabaseModule], 






# for solving the cors issue add only the following code in the main.ts
# app.enableCors()

# for implementing the rate limiting we can use the following code
npm i --save @nestjs/throttler
# anside the app.module .ts we can suggest some changes for rate limiting and configure again the app.module.ts

# import { Module } from '@nestjs/common';
# import { AppController } from './app.controller';
# import { AppService } from './app.service';
# import { UsersModule } from './users/users.module';
# import { DatabaseModule } from './database/database.module';
# import { EmployeesModule } from './employees/employees.module';
# import { ThrottlerModule,ThrottlerGuard } from '@nestjs/throttler';
# import { APP_GUARD } from '@nestjs/core';

# @Module({
#   imports: [UsersModule, 
#     DatabaseModule, 
#     EmployeesModule,
#     ThrottlerModule.forRoot([{
#       ttl: 60000,
#       limit: 10,
#     }])
#   ],
#   // while installling imaports is the empty array but after the addition of the new module called userModule it automatically add user modules
#   controllers: [AppController],
#   providers: [AppService,{
#     provide: APP_GUARD,
#     useClass: ThrottlerGuard,
#   }],
# })
# export class AppModule {}
