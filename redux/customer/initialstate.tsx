export type CustomerData = {
    name?: string
    surname?: string
    email?: string
    identification?: string
}

export const customerInitialState : CustomerData = {
    name : '',
    email: '',
    identification: '',
    surname: ''
}