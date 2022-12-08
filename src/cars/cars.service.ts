import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'VW', model: 'Jetta' },
    { id: uuid(), brand: 'Nissan', model: 'March' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((e) => e.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found :(`);

    return car;
  }

  create(createCarDto: CreateCarDto) {
    const car: Car = { id: uuid(), ...createCarDto };
    this.cars.push(car);

    return car;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    const car = this.findOneById(id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found :(`);

    if (updateCarDto.brand) {
      car.brand = updateCarDto.brand;
    }

    if (updateCarDto.model) {
      car.model = updateCarDto.model;
    }

    return car;
  }

  delete(id: string) {
    const car = this.findOneById(id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found :(`);

    this.cars = this.cars.filter((e) => e.id !== id);

    return this.cars;
  }

  fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
  }
}
