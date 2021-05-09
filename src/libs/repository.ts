import { IRawWebHookData } from "src/interfaces/IRawWebHookData";
import { Database } from 'sqlite3';
import { IRepository } from '../interfaces/IRepository';
import { injectable } from "tsyringe";

@injectable()
export default class Repository implements IRepository {


    
    static getDBConnection(): Database {
        const dbLocation = process.env.NODE_ENV == 'test'? __dirname + '/../../test.sqlite' : ':memory:';
        return new Database(dbLocation);
    }

    async save(data: IRawWebHookData): Promise<void> {
        await this.run("CREATE TABLE IF NOT EXISTS web_hook_data (web_hook_datum TEXT)");
        await this.run("INSERT INTO web_hook_data (web_hook_datum) VALUES (?)", [JSON.stringify(data)]);
    }

    async all(): Promise<unknown> {
        return await this.runAll("SELECT web_hook_datum FROM web_hook_data");
    }

    run(sql, params = []){
        return new Promise((resolve, reject) => {
            Repository.getDBConnection().run(sql, params, function (err) {
                if (err) {
                    console.log('Error running sql ' + sql);
                    console.log(err);
                    reject(err);
                } else {
                    // console.log(result);
                    resolve({ id: this.lastID });
                }
            });
        });
    }

    runAll(sql, params = []){
        return new Promise((resolve, reject) => {
            Repository.getDBConnection().all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + sql);
                    console.log(err);
                    reject(err);
                } else {
                    resolve(rows);
                }
            });
        });
    }

}