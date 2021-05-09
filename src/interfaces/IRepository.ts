import { IRawWebHookData } from "./IRawWebHookData";

export interface IRepository {

    save(data: IRawWebHookData): Promise<void>;

    all(): Promise<unknown>;

}

