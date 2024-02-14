import { PrismaClient } from "@prisma/client";

export class PrismaService {
    private readonly _client: PrismaClient;

    constructor() {
        this._client = new PrismaClient();
    }

    async connect() {
        await this._client.$connect();
        console.log("Сервер успешно подключен к базе данных");
    }

    async disconnect() {
        await this._client.$disconnect();
        console.log("Сервер успешно отключен от базы данных");
    }

    get client() {
        return this._client;
    }

}