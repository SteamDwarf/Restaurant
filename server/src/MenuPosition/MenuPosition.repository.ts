import { MenuPositionModel } from "@prisma/client";
import { PrismaService } from "../database";
import { IMenuPositionData } from "./MenuPosition.interface";

export class MenuPositionRepository {
    private readonly _prismaService;

    constructor(prismaService: PrismaService) {
        this._prismaService = prismaService;
    }

    public async findById(id: number): Promise<MenuPositionModel | null> {
        return this._prismaService.client.menuPositionModel.findFirst({
            where: {
                id
            }
        })
    }
    
    public async findByFilter(filter: Partial<MenuPositionModel>): Promise<MenuPositionModel | null> {
        return this._prismaService.client.menuPositionModel.findFirst({
            where: filter
        })
    }

    public async find(): Promise<MenuPositionModel[]> {
        return this._prismaService.client.menuPositionModel.findMany();
    }

    public async create(data: IMenuPositionData): Promise<MenuPositionModel> {
        return this._prismaService.client.menuPositionModel.create({data});
    }
}