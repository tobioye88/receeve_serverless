import { IRawWebHookData } from "./IRawWebHookData";

export interface IStorageService {

    save(data: IRawWebHookData): Promise<void>;

    all(): Promise<any>;

}

