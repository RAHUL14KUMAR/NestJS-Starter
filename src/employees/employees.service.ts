import { Injectable } from '@nestjs/common';
// import { CreateEmployeeDto } from './dto/create-employee.dto';
// import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Prisma } from '@prisma/client';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class EmployeesService {

  constructor(private readonly databaseService: DatabaseService) {}
  async create(createEmployeeDto: Prisma.EmployeeCreateInput) {
    // return 'This action adds a new employee';
    return this.databaseService.employee.create({
      data: createEmployeeDto,
    });
  }

  async findAll(role?:'INTERNS'|'ENGINEERS'|'ADMINS') {
    // return `This action returns all employees`
    return this.databaseService.employee.findMany({
      where: {
        role: role,
      },
    });
  }

  async findOne(id: number) {
    // return `This action returns a #${id} employee`;
    return this.databaseService.employee.findUnique({
      where: {
        id: id,
      },
    }); 
  }

  async update(id: number, updateEmployeeDto: Prisma.EmployeeUpdateInput) {
    // return `This action updates a #${id} employee`;
    return this.databaseService.employee.update({
      where: {
        id: id,
      },
      data: updateEmployeeDto,
    });
  }

  async remove(id: number) {
    // return `This action removes a #${id} employee`;
    return this.databaseService.employee.delete({
      where: {
        id: id,
      },
    });
  }
}
