import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";
import { UserRequestDto } from "./dto/userRequest.dto";
import { UserResponseDto } from "./dto/userResponse.dto";
import { User } from "./user.entity";
import PostgresErrorCode from "../../database/postgresErrorCode.enum";
import * as bcrypt from "bcryptjs";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findByUsername(username: string): Promise<User> {
    return await this.userRepository.findByUsername(username);
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
