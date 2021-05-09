import { APIGatewayRequest as eventGenerator } from '../generators/APIGatewayRequest';
import { generateRawEvent } from '../generators/util';
import { main } from '../../src/functions/webhook/index';
import * as crypto from 'crypto';

const SALT = 'tjj+xv56xy0uHI0TgH15Jb3M2rfnTiAGiI8IWfenbYiawQTf6RkIsiDPOxhNNSKXGT6uhSxJaIBIp1+eeK6DQka//t7ftm1xT1FI7P2BQ1GjB/U8+KM/ukEvcL72NRDnCr/aQHbrJkY11PEL6oxzIxTqOC8trCEfXjSJpltm/M4=';

describe("Handler Function Test", () => {
    
    it("MAIL_GUN_API_KEY should not be empty", () => {
        process.env.MAIL_GUN_API_KEY = SALT;
        expect(process.env.MAIL_GUN_API_KEY).toBeDefined();
    });
    
    it("event hash should be a valid hash", () => {
        process.env.MAIL_GUN_API_KEY = SALT;
        const fakeData = generateRawEvent();
        const value = fakeData['event-data'].timestamp + fakeData.signature.token;
        
        const hash = crypto.createHmac('sha256', process.env.MAIL_GUN_API_KEY)
        .update(value)
        .digest('hex');

        expect(hash).toBe(fakeData.signature.signature);
    });
    
    it("event hash should be a valid hash", async done => {
        process.env.MAIL_GUN_API_KEY = SALT;
        
        const fakeData = generateRawEvent();
        const event = eventGenerator({
                        body: { ...fakeData }
                    });
        const res = <any> await main(event, null, null);

        expect(res.statusCode).toBe(200);
        done();
    });

});