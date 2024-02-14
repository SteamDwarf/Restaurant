import { MenuPositionModel } from "@prisma/client";
import { MenuPosition } from "./MenuPosition.entity";
import { IMenuPositionData } from "./MenuPosition.interface";
import { MenuPositionRepository } from "./MenuPosition.repository";

export class MenuPositionService {
    private readonly _menuPositionRepository;

    constructor(menuPositionRepository: MenuPositionRepository) {
        this._menuPositionRepository = menuPositionRepository;
    }

    public async create(data: IMenuPositionData) {
        const model = await this._menuPositionRepository.create(data);
        const entity = new MenuPosition(model);

        return entity;
    }

    public async findById(id: number) {
        const model = await this._menuPositionRepository.findById(id);

        if(model) {
            const entity = new MenuPosition(model);

            return entity;
        }
    }

    public async findByFiter(filter: Partial<MenuPositionModel>) {
        const model = await this._menuPositionRepository.findByFilter(filter);

        if(model) {
            const entity = new MenuPosition(model);

            return entity;
        }
    }

    public async find() {
        const models = await this._menuPositionRepository.find();
        const entities = models.map(model => new MenuPosition(model));

        return entities;
    }
}