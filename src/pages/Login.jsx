import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../validation/loginSchema";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router";
import api from "../api/mainApi";

export default function () {
  const nav = useNavigate();
  const login = useAuthStore((s) => s.login);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const onSubmit = async (d) => {
    // if (d.username === "admin" && d.password === "123456") {
    //   login(d);
    //   nav("/");
    // } else alert("admin / 123456");

    try {
      const resp = await api.post("/auth/login" ,{ 
         username: d.username,
         password: d.password
        })

        console.log(resp)
      if (resp.status==200) {
       login(d);
       nav("/");
     } 
    } catch (error) {
      console.log(error)
    }
  };
  return (

    <div className="h-screen">
    <form className="border-2 rounded-2xl flex flex-col items-center ]"
      onSubmit={handleSubmit(onSubmit)}
      style={{ maxWidth: 300, margin: "50px auto" }}
    >
      <h1>Welcome</h1>
      <h2>ล็อกอินเพื่อเข้าสู่ระบบ fontend Dev</h2>
      <input placeholder="Username" className="border-1" {...register("username")} />
      <div>{errors.username?.message}</div>
      <br />
      <input type="password" className="border-1" placeholder="Password" {...register("password")} />
      <div>{errors.password?.message}</div>
      <br />
      <button className="bg-sky-500 hover:bg-sky-700 rounded-b-md ">Login</button>
    </form>
    </div>
  );
}
