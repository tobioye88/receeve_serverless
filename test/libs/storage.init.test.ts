import "reflect-metadata";
import { container } from 'tsyringe';
import { IStorageService } from '../../src/interfaces/IStorageService';
import { generateRawEvent } from '../generators/util';
import StorageSystem from '../../src/libs/storageSystem';
import Repository from '../../src/libs/repository';




container.register("StorageSystem", { useClass: StorageSystem });
container.register("Repository", { useClass: Repository });

describe("Storage Test", () => {
    it("it should be able to store raw JSON data", async done => {
        const storageSystem: IStorageService = container.resolve<IStorageService>('StorageSystem');
        await storageSystem.save(generateRawEvent());

        const afterSave = await storageSystem.all();

        expect(afterSave.length).toBeGreaterThan(0);
        done();
    })
})