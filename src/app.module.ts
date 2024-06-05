import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';
import { ThrottlerModule,ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [UsersModule, 
    DatabaseModule, 
    EmployeesModule,
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10,
    }])
  ],
  // while installling imaports is the empty array but after the addition of the new module called userModule it automatically add user modules
  controllers: [AppController],
  providers: [AppService,{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class AppModule {}
