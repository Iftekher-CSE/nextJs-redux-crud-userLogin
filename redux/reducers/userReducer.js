import { User_Input } from "../actionTypes/actionTypes";

const initialState = {
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case User_Input:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state;
    }
}

export default userReducer;