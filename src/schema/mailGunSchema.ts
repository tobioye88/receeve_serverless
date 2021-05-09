

// MailGun Object Schema
export default {
  "$schema": "http://json-schema.org/schema#",
  "type": "object",
  "properties": {
    "signature": {
      "type": "object",
      "properties": {
        "timestamp": { "type": "string" },
        "token": { "type": "string" },
        "signature": { "type": "string" }
      },
      "required": [ "timestamp", "token", "signature" ]
    },
    "event-data": {
      "type": "object",
      "properties": {
        "event": { "type": "string" },
        "timestamp": { "type": "number" },
        "id": { "type": "string" }
      },
      "required": [ "event", "timestamp", "id" ]
    }
  },
  "required": [ "signature", "event-data" ]
} as const;
  