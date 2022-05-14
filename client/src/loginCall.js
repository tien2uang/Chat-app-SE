import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthAction";
export const loginCall = async(userCredentials, dispatch) => {
    dispatch(LoginStart(userCredentials));
    try {

        const res = await axios.post("/auth/log-in", userCredentials);
        console.log(res.data);
        dispatch(LoginSuccess(res.data.username));
    } catch (err) {
        dispatch(LoginFailure());
    }
}