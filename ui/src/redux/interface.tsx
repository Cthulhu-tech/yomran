export interface Action<T, P> {
    readonly type: T
    readonly payload?: P
}

export type StoreData = {
    visibleAside: {
        open: boolean
    }
}