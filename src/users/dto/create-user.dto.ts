import { IsEmail, IsString, IsEnum ,IsNotEmpty} from 'class-validator';
export class CreateUserDto {
    // we can appliaed validation by using class-validator
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsEnum(['ADMIN', 'INTERN', 'ENGINEER'],{
        message: 'role must be either ADMIN, INTERN or ENGINEER'
    })
    role: 'ADMIN' | 'INTERN' | 'ENGINEER';
}