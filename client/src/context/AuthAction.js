export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (username) => ({
    type: "LOGIN_SUCCESS",
    payload: username,
});

export const LoginFailure = (err) => ({
    type: "LOGIN_FAILURE",
    payload: err,
});