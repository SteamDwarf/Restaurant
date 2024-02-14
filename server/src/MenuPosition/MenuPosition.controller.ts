import { Request, Response } from "express";
import { MenuPositionService } from "./MenuPosition.service";

export class MenuPositionController {
    private readonly _menuPositionService;

    constructor(menuPositionService: MenuPositionService) {
        this._menuPositionService = menuPositionService;
    }

    public async find(request: Request, response: Response) {
        const entities = await this._menuPositionService.find();

        response.json(entities);
    }

    public async create(request: Request, response: Response) {
        const data = request.body;
        const entity = await this._menuPositionService.create(data);

        response.json(entity);
    }
}