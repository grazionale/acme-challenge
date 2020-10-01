import { Injectable } from "@nestjs/common";

@Injectable()
export class PlainService {
  buscar(): string {
    return "planos";
  }
}
