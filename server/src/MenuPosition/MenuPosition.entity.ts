import { MenuPositionModel } from "@prisma/client";

export class MenuPosition {
    private readonly _id;
    private readonly _name;
    private readonly _category;
    private readonly _price;

    constructor(model: MenuPositionModel) {
        this._id = model.id;
        this._name = model.name;
        this._category = model.category;
        this._price = model.price;
    }

    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get category() {
        return this._category;
    }
    get price() {
        return this._price;
    }
}