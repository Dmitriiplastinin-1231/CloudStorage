import { AuthService } from './auth.service';
import { Controller, Post, UseGuards, Request, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { LocalAuthGuard } from './guard/local.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly AuthService: AuthService
    ){}


    @UseGuards(LocalAuthGuard)
    @Post('login')
    @ApiBody({type: CreateUserDto})
    async login(@Request() req) {
      return this.AuthService.login(req.user as UserEntity);
    }


    @Post('/register')
    register(@Body() dto: CreateUserDto) {
        return this.AuthService.register(dto);
    }
  }