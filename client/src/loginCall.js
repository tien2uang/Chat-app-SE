import axios from "axios";
import { LoginStart, LoginSuccess, LoginFailure } from "./context/AuthAction";
export const loginCall = async(userCredentials, dispatch) => {
    dispatch(LoginStart(userCredentials));
    try {

        const res = await axios.post("/auth/log-in", userCredentials);
        console.log(res.data);
        if (res.data.username !== undefined) {
            dispatch(LoginSuccess(res.data.username));
        } else {
            dispatch(LoginFailure("Đăng nhập lỗi"));
        }
    } catch (err) {
        console.log(err);
    }
}