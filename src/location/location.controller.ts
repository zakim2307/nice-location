import { Controller, Get, Render } from '@nestjs/common';
import { LocationService } from './location.service';

interface ILocationListDto {
  locations: string[];
}

@Controller()
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  @Render('list.hbs')
  listLocations(): ILocationListDto {
    const locations = this.locationService.list();
    return { locations };
  }

  // @Get('/test')
  // getTest(): string {
  //   return this.appService.getTest();
  // }

  // @Get('/fest')
  // getFest(): string {
  //   return this.appService.getFest();
  // }
}
