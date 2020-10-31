import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiBody,
  ApiConflictResponse,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  @ApiOperation({ summary: 'Sign Up for a User' })
  @ApiBadRequestResponse({ status: 400, description: 'Bad Request' })
  @ApiConflictResponse({ description: 'Username already exists' })
  @ApiCreatedResponse({ description: 'User Created' })
  @ApiBody({ type: AuthCredentialsDto })
  signUp(@Body(ValidationPipe) authCredentialDto: AuthCredentialsDto) {
    return this.authService.signUp(authCredentialDto);
  }

  @Post('signin')
  @ApiOperation({ summary: 'Sign the user in' })
  @ApiBadRequestResponse({ description: 'Bad Request' })
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiConflictResponse({ description: 'Username already exists' })
  @ApiOkResponse({ description: 'Sign in access token created' })
  @ApiBody({ type: AuthCredentialsDto })
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }
}
