import { createContext, useEffect, useReducer } from "react";
import {AuthReducer } from "./AuthReducer";
import { UpdateSuccess } from "./AuthAction";
import Pusher from "pusher-js";
 

 const INITIAL_STATE = {
     user: JSON.parse(localStorage.getItem("user")) || null,
     error: false
 };


 export const AuthContext = createContext(INITIAL_STATE);

 export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    
    useEffect(()=>{
      localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])

    useEffect(()=>{
      const pusher = new Pusher("64873375849c544489d1", {
        cluster: "ap1",
      });
  
      const channel = pusher.subscribe("user");
      channel.bind("update", function (data) {
        const user = data.user;
        if (user._id==state.user?._id) {
          dispatch(UpdateSuccess(user));
        }
      });
  
      return () => {
        channel.unbind("update");
        channel.unsubscribe();
      }
    })
    
    return (
      <AuthContext.Provider
        value={{
          user: state.user,
          error: state.error,
          dispatch,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };