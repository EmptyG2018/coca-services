import { Injectable } from '@nestjs/common';

@Injectable()
export class TagsService {
  create() {
    return 'This action adds a new tag';
  }

  findAll() {
    return `This action returns all tags`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return `This action removes a #${id} tag`;
  }
}
