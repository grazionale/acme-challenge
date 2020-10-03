const bcrypt = require("bcrypt");
import { BadRequestException, Injectable } from "@nestjs/common";
import { UserRequestDto } from "./dto/userRequest.dto";
import { UserResponseDto } from "./dto/userResponse.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async buscar(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async salvar(userRequestDto: UserRequestDto): Promise<UserResponseDto> {
    const userExist = await this.userRepository.find({
      username: userRequestDto.username,
    });
    if (userExist.length > 0) {
      throw new BadRequestException("Usuário já cadastrado");
    }

    userRequestDto.password = await bcrypt.hash(userRequestDto.password, 10);
    const user = await this.userRepository.save(userRequestDto);
    user.password = undefined;

    return user;
  }
}
