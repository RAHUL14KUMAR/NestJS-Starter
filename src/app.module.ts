import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  // while installling imaports is the empty array but after the addition of the new module called userModule it automatically add user modules
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
