import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.modulo';
import { usersProviders } from './users.providers';



@Module({
  imports:[DatabaseModule],
  controllers: [UsersController],
  providers: [
    ...usersProviders,
    UsersService]
})
export class UsersModule {}
