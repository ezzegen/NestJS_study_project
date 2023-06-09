import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { UserCreateDto } from '../user/dto/user-create.dto';
import { ValidationPipe } from '../pipes/validation.pipe';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {} // injection service

  @ApiOperation({ summary: 'Login of user' })  //dec for doc, description
  @ApiResponse({ status: 201, type: '' })
  @Post('/login')
  login(@Body() userDto: UserCreateDto): Promise<object> {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Registration of user' })
  @ApiResponse({ status: 201, type: '' })
  @UsePipes(ValidationPipe)
  @Post('/registration')
  registration(@Body() userDto: UserCreateDto): Promise<object> {
    return this.authService.registration(userDto);
  }
}
