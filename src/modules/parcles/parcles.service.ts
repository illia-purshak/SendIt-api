import { Injectable } from "@nestjs/common";

@Injectable()
export class ParclesService {
  create() {
    return "This action adds a new parcle";
  }

  findAll() {
    return `This action returns all parcles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcle`;
  }

  update(id: number) {
    return `This action updates a #${id} parcle`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcle`;
  }
}
