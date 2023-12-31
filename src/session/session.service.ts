import { Injectable } from '@nestjs/common';
import { Session } from 'src/schemas/session';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSessionDTO, UpdateSessionDTO } from './session.validation';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name) private readonly sessionModel: Model<Session>,
  ) {}

  async findAll(): Promise<Session[]> {
    return this.sessionModel.find();
  }
  async createSession(body: CreateSessionDTO): Promise<Session> {
    const session = await this.sessionModel.create(body);
    return session;
  }
  async updateSession(id: string, body: UpdateSessionDTO): Promise<Session> {
    const session = await this.sessionModel.findByIdAndUpdate(id, body, {
      new: true,
    });
    return session;
  }
  async deleteSession(id: string): Promise<Session | any> {
    return await this.sessionModel.findByIdAndDelete(id);
  }
}
