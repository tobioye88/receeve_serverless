import { IRawWebHookData } from 'src/interfaces/IRawWebHookData';
import { IRepository } from '../interfaces/IRepository';
import { autoInjectable, inject } from 'tsyringe';
import { IStorageService } from 'src/interfaces/IStorageService';

@autoInjectable()
export default class StorageSystem implements IStorageService {

    constructor(@inject("Repository") private storage?: IRepository){}

    async save(data: IRawWebHookData): Promise<void> {
        this.storage.save(data);
    }

    all(): Promise<any> {
        return this.storage.all();
    }

}