import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './stratagies/local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './stratagies/jwt.stratagy';

@Module({
  providers: [AuthService, LocalStrategy,JwtStrategy],
  controllers: [AuthController],
  imports: [UsersModule, PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        signOptions: {
           expiresIn: process.env.EXPIRES_IN,
        },
        secretOrPrivateKey: process.env.SECRET_KEY,
      }),
      inject: [ConfigService]
    })
  ],

})
export class AuthModule {}
