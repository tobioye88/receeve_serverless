
export interface IRawWebHookData {
    signature: Signature
    "event-data": EventData
}

export interface Signature {
    timestamp: string
    token: string
    signature: string
}

export interface EventData {
    event: string
    timestamp: number
    id: string
}