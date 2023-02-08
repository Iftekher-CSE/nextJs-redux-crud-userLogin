const { User_Input } = require("../actionTypes/actionTypes")

export const userInputAction = (e) => {
    return { type: User_Input, payload: { name: e.target.name, value: e.target.value } }
}