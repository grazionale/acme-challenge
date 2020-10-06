import { TestingModule, Test } from "@nestjs/testing";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";
import { UserService } from "./user.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { BadRequestException } from "@nestjs/common";
import { InternalServerErrorException } from "@nestjs/common";

export class MockError {
  code: string;
}

describe("userService", () => {
  let service: UserService;
  let repository: UserRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserRepository),
          useClass: UserRepository,
        },
      ],
    }).compile();

    service = module.get(UserService);
    repository = module.get(getRepositoryToken(UserRepository));
  });

  function mockUser() {
    let userMock = new User();
    userMock.firstName = "gabriel";
    userMock.lastName = "grazionale";
    userMock.username = "grazionale";
    userMock.password = "123456";

    return userMock;
  }

  function mockError() {
    let errorMock = new MockError();
    errorMock.code = "23505";
    return errorMock;
  }

  it("deve retornar um único usuário ao buscar pelo username", async () => {
    jest.spyOn(repository, "findByUsername").mockResolvedValueOnce(mockUser());

    expect(await service.findByUsername("gabriel")).toBeTruthy();
  });

  it("deve salvar um usuário", async () => {
    jest.spyOn(repository, "save").mockResolvedValueOnce(mockUser());

    const user = mockUser();
    user.password = undefined;

    expect(await service.save(mockUser())).toEqual(user);
  });

  it("deve retornar uma lista de usuários", async () => {
    jest.spyOn(repository, "find").mockResolvedValueOnce([mockUser()]);

    expect(await service.find()).toEqual([mockUser()]);
  });

  it("deve retornar erro ao cadastrar usuário já existente", async () => {
    jest.spyOn(repository, "save").mockRejectedValueOnce(mockError());

    await expect(service.save(mockUser())).rejects.toThrowError(
      new BadRequestException("Usuário já existente")
    );
  });

  it("deve retornar internal server error ao cadastrar um usuário inválido", async () => {
    const error = mockError();
    error.code = null;

    jest.spyOn(repository, "save").mockRejectedValueOnce(error);

    await expect(service.save(mockUser())).rejects.toThrowError(
      new InternalServerErrorException("Algo deu errado")
    );
  });
});
