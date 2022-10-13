import { Injectable,Inject } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_REPOSITORY')
    private usersRepository:Repository<User>
  ){}
  async listar():Promise<User[]>{
    return this.usersRepository.find();
  }
  private users:User[] = [];
  create(createUserDto: CreateUserDto) {
   const IdmaxAtual = this.users[this.users.length -1 ]?. id || 0;
   const id = IdmaxAtual + 1;
    const user={
    id,
    ...createUserDto
  };
  this.users.push(user)
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const index = this.users.findIndex((User)=>User.id === id)

    return this.users[index]
   // return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    const user = this.findOne(id)
    const newUser={
      ...user,
      ...updateUserDto
    }
    const index = this.users.findIndex((user)=>user.id===id)
   // return `This action updates a #${id} user`;
  }

  remove(id: number) {
    const index= this.users.findIndex((user)=>user.id ===id)
    if(index=== -1){
      throw new NotFoundException(`usuario com o id não encontrado`) //exceçao de quando algo nao for encontrado
    }
    this.users.splice(index,1)
    return `This action removes a #${id} user`;
  }
}
