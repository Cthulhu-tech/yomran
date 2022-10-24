export interface Action<T, P> {
    readonly type: T
    readonly payload?: P
}

export type StoreData = {
    visibleAside: booleanType
    roomsStore: RoomsType[]
    visiblePopup: PopupType
}

export type PopupType = {
    open: boolean
    callback: () => void
    message: string
}

export type booleanType = {
    open: boolean
}

export type RoomsType = {
    id: number
    name: string
    creator: string
    img: string
    lastMessage: string
    lastMessageDate: string
    lastMessageUserImg: string
}