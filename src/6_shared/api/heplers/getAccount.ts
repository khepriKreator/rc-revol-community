import {AccountDto} from "../generated/game";

export const getAccount = (id: string, data: AccountDto[]): AccountDto => data[data.findIndex((item) => item.id === Number(id))]