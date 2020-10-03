import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserRequestDto } from "./dto/userRequest.dto";
import { UserResponseDto } from "./dto/userResponse.dto";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(): Promise<User[]> {
    return await this.userService.find();
  }

  @Post()
  async save(@Body() userRequestDto: UserRequestDto): Promise<UserResponseDto> {
    return await this.userService.save(userRequestDto);
  }
}
