export type action<T> = {
    payload: T;
    type: string;
}