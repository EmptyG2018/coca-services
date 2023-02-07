import { Injectable } from '@nestjs/common';

@Injectable()
export class SpecialsService {
  create() {
    return 'This action adds a new special';
  }

  findAll() {
    return `This action returns all specials`;
  }

  findOne(id: number) {
    return `This action returns a #${id} special`;
  }

  update(id: number) {
    return `This action updates a #${id} special`;
  }

  remove(id: number) {
    return `This action removes a #${id} special`;
  }
}
