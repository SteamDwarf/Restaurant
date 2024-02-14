import { MenuPositionController, MenuPositionRepository, MenuPositionService } from "./MenuPosition";
import { App } from "./app";
import { PrismaService } from "./database";

const prismaService = new PrismaService();

const menuPositionRepository = new MenuPositionRepository(prismaService);
const menuPositionService = new MenuPositionService(menuPositionRepository);
const menuPositionController = new MenuPositionController(menuPositionService);


const app = new App(prismaService, menuPositionController);


app.start();