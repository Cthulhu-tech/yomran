export interface Action<T, P> {
    readonly type: T
    readonly payload?: P
}

export type StoreData = {
    visibleAside: {
        open: boolean
    }
    roomsStore: Rooms[]
}

export type Rooms = {
    id: number
    name: string
    creator: string
    img: string
    lastMessage: string
    lastMessageDate: string
    lastMessageUserImg: string
}