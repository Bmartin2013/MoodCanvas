import { draw } from "../infra/service/IDrawService"

export const execute = async (parameters) => {
    return await draw(parameters)
}