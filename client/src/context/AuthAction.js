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

export const SignUpStart = () => ({
    type: "SIGNUP_START",
})
export const SignUpSuccess = () => ({
    type: "LOGIN_SUCCESS",
})

export const SignUpFailure = (err) => ({
    type: "SIGNUP_FAILURE",
    payload: err,

})