import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { EmployeesModule } from './employees/employees.module';

@Module({
  imports: [UsersModule, DatabaseModule, EmployeesModule],
  // while installling imaports is the empty array but after the addition of the new module called userModule it automatically add user modules
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
