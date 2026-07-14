import { create } from "zustand";
export default create((set)=>({
    user:JSON.parse(localStorage.getItem("user")),
    login: (u) => {
        localStorage.setItem("user",JSON.stringify(u));
        set({user:u});
    },
    logout: ()=> {
        localStorage.removeItem("user");
        set({user:null});
    },
}));