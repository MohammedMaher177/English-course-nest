import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { SessionService } from './session.service';
import { Session } from 'src/schemas/session';
import { CreateSessionDTO, UpdateSessionDTO } from './session.validation';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Get()
  async getAllSession(): Promise<Session[]> {
    return await this.sessionService.findAll();
  }
  @Post()
  async createSession(@Body() body: CreateSessionDTO): Promise<Session> {
    return await this.sessionService.createSession(body);
  }
  @Put(':id')
  async updateSession(
    @Body() body: UpdateSessionDTO,
    @Param('id') id: string,
  ): Promise<Session> {
    return await this.sessionService.updateSession(id, body);
  }
  @Delete(':id')
  async deleteSession(@Param('id') id: string): Promise<Session> {
    return this.sessionService.deleteSession(id);
  }
}
