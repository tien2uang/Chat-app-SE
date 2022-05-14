export const AuthReducer = (state, action) => {

    switch (action.type) {
        case "LOGIN_START":
            return {
                username: null,
                error: false
            };
        case "LOGIN_SUCCESS":
            console.log(action.payload + "sucuess");
            return {
                username: action.payload,
                error: false
            };
        case "LOGIN_FAILURE":
            console.log("fail" + action.payload);
            return {
                username: null,
                error: true
            };
        default:
            return state;

    }
}