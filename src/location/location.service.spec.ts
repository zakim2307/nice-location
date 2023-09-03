import { LocationService } from './location.service';

describe('LocationService', () => {
  let service: LocationService;

  beforeEach(async () => {
    service = new LocationService();
  });

  it('it should return locations', () => {
    expect(service.list()).toMatchObject([
      'Belgaum',
      'Banglaore',
      'bangladesh',
      'honda',
    ]);
  });
});
