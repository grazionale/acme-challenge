import {
  BadRequestException,
  HttpException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { UserRequestDto } from "./dto/userRequest.dto";
import { UserResponseDto } from "./dto/userResponse.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import PostgresErrorCode from "../../database/postgresErrorCode.enum";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async save(userRequestDto: UserRequestDto): Promise<UserResponseDto> {
    try {
      userRequestDto.password = await bcrypt.hash(userRequestDto.password, 10);
      const user = await this.userRepository.save(userRequestDto);
      user.password = undefined;
      return user;
    } catch (error) {
      if (error?.code === PostgresErrorCode.UniqueViolation) {
        throw new BadRequestException("Usuário já existente");
      }
      throw new InternalServerErrorException("Algo deu errado");
    }
  }
}
