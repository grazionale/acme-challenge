import { TestingModule, Test } from "@nestjs/testing";
import { Plain } from "./plain.entity";
import { PlainService } from "./plain.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { PlainRepository } from "./plain.repository";

describe("userService", () => {
  let service: PlainService;
  let repository: PlainRepository;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlainService,
        {
          provide: getRepositoryToken(PlainRepository),
          useClass: PlainRepository,
        },
      ],
    }).compile();

    service = module.get(PlainService);
    repository = module.get(getRepositoryToken(PlainRepository));
  });

  function mockPlain() {
    let plainMock = new Plain();
    plainMock.title = "teste";
    plainMock.description = "teste";
    plainMock.price = 10.9;

    return plainMock;
  }

  it("deve retornar uma lista de planos", async () => {
    jest.spyOn(repository, "find").mockResolvedValueOnce([mockPlain()]);

    expect(await service.find()).toEqual([mockPlain()]);
  });

  it("deve salvar um plano", async () => {
    jest.spyOn(repository, "save").mockResolvedValueOnce(mockPlain());

    expect(await service.save(mockPlain())).toEqual(mockPlain());
  });
});
