import { Injectable } from "@nestjs/common";

@Injectable()
export class PlanoService {
  buscar(): string {
    return "planos";
  }
}
