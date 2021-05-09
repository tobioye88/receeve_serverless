import { INotificationData } from '../../src/interfaces/INotificationData';

export const generateRawEvent = () => {
    return {
        "signature": {
            "timestamp": "1529006854",
            "token": "eyJzaWduYXR1cmUiOnsidGltZXN0YW1wIjoiMTUyOTAwNjg1NCIsInRva2VuIjoiYTE3Mjk2YmQ5OGQ2MjczNzRlZjgyNGMxYzJkZWEzYWRmOTg2NTc1ZmQxYzBjN2MwMzI2NWQ5NmY3ZWQxMDNkZiIsInNpZ25hdHVyZSI6ImQyMjcxZDEyMjk5ZjY1OTJkOWQ0NGNkOWQyNTBmMDcwNGU0Njc0YzMwZDc5ZDA3YzQ3YTY2Zjk1Y2U3MWNmNTUifSwiZXZlbnQtZGF0YSI6eyJldmVudCI6Im9wZW5lZCIsInRpbWVzdGFtcCI6MTYyMDU0NzkyOTU2MSwiaWQiOiJEQUNTc0FkVlNlR3BMaWQ3VE4wM1dBIn19",
            "signature": "c5f82a30479ab68a6f075d6d8549b31a7efa216cb6e36bbfbcebf2fb200d0a7b"
        },
        "event-data": {
            "event": "opened",
            "timestamp": 1620547929561,
            "id": "DACSsAdVSeGpLid7TN03WA"
        }
    }
}

export const generateNotificationData = () => {
    return <INotificationData>{
        Provider: "Mailgun",
        timestamp: (new Date).getTime(),
        type: "completed"
    };
}