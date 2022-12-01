import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {

  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla' },
    { id: 2, brand: 'VW', model: 'Jetta' },
    { id: 3, brand: 'Nissan', model: 'March' },
  ]

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const car = this.cars.find(e => e.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found :(`)
    
    return car
  }
}
