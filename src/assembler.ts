import { LocationController } from './location/location.controller';
import { LocationService } from './location/location.service';

const locationService = new LocationService();
const locationController = new LocationController(locationService);
const hello = locationController.listLocations();

console.log(hello);
