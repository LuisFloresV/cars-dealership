import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    { id: uuid(), name: 'Toyota', createdAt: 12312312 },
  ];

  create(createBrandDto: CreateBrandDto) {
    const { name } = createBrandDto;
    const brand: Brand = { id: uuid(), name, createdAt: new Date().getTime() };
    this.brands.push(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((e) => e.id === id);

    if (!brand) throw new NotFoundException(`Car with id ${id} not found :(`);

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    const brand = this.findOne(id);

    if (!brand) throw new NotFoundException(`Car with id ${id} not found :(`);

    brand.name = updateBrandDto.name;
    brand.updatedAt = new Date().getTime();

    return brand;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    if (!brand) throw new NotFoundException(`Car with id ${id} not found :(`);

    this.brands = this.brands.filter((e) => e.id !== id);

    return this.brands;
  }

  fillCarsWithSeedData(brands: Brand[]) {
    this.brands = brands;
  }
}
