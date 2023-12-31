import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SessionController } from './session/session.controller';
import { SessionModule } from './session/session.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { SessionService } from './session/session.service';
import { Session, SessionSchema } from './schemas/session';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://momaherfrontend:Mohammed189199@cluster0.mbdwkdz.mongodb.net/englishcourse',
    ),
    MongooseModule.forFeature([{ name: Session.name, schema: SessionSchema }]),
    SessionModule,
  ],
  controllers: [AppController, SessionController],
  providers: [AppService, SessionService],
})
export class AppModule {}
