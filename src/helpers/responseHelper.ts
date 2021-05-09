

export default class ResponseHelper {

    private static general(success: boolean, data: any, message : string ="Success"){
        return { success, data, message };
    }


    static success(data: any, message : string ="Success"){
        return this.general(true, data, message);
    }

    static error(data: any, message : string ="Error"){
        return this.general(false, data, message);
    }

}