import { Test, TestingModule } from '@nestjs/testing';
import { Session } from './session';

describe('Session', () => {
  let provider: Session;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Session],
    }).compile();

    provider = module.get<Session>(Session);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
