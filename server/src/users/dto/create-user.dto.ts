import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({default: 'test@test.ru'})
    email: string;

    @ApiProperty({default: 'Mister Credo'})
    fullName: string;

    @ApiProperty({default: '123123123'})
    password: string;
}
