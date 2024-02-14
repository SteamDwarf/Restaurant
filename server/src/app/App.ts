import express from 'express';
import { PrismaService } from '../database';
import { MenuPositionController } from '../MenuPosition';

export class App {
    private readonly _app;
    private readonly _port;
    private readonly _uri;
    private readonly _prismaService;
    private readonly _menuPositionController;

    constructor(prismaService: PrismaService, menuPositionController: MenuPositionController) {
        this._app = express();
        this._port = 7000;
        this._uri = 'localhost';
        this._prismaService = prismaService;
        this._menuPositionController = menuPositionController;
    }

    public async start(successfulCallback?: () => void) {
        this._app.listen(this._port, async() => {
            console.log(`Сервер запущен по адресу ${this._uri}:${this._port}`);

            await this._prismaService.connect();

            this.useRoute();

            if(successfulCallback) successfulCallback();
        })
    }

    public useRoute() {
        this._app.use(express.json());
        this._app.get('/api/menu-position', this._menuPositionController.find.bind(this._menuPositionController));
        this._app.post('/api/menu-position', this._menuPositionController.create.bind(this._menuPositionController));
    }
}