import { Test, TestingModule } from '@nestjs/testing';
import { LocationController as AppController } from './location.controller';
import { LocationService } from './location.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [LocationService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "locations"', () => {
      expect(appController.listLocations()).toMatchObject({
        locations: ['Belgaum', 'Banglaore', 'bangladesh', 'honda'],
      });
    });
  });
});
