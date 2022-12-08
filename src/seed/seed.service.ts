import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';
import { BrandsService } from '../brands/brands.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillCarsWithSeedData(BRAND_SEED);
    return `seed executed`;
  }
}
