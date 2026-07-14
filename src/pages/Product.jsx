import api from "../api/mainApi";
import { useLoaderData } from "react-router";
import ProductCard from "../components/ProductCard";
import { useState } from "react";






function product() {

  const [input,setInput] = useState()

  const output = useLoaderData();
  console.log("ffd", output);

  const showText= async()=> {
    
 try {
    const fillter = await api.post("/todos/8",{
          content: input
    })
console.log('fillter', fillter)

 } catch (error) {
    console.log(error)
 }}


console.log(input)

  return (
    <>
      {" "}
      <from className=" flex  flex-col   items-center bg-green-500 h-screen">
        <div className="border  rounded-2xl m-auto p-5  bg-pink-300">
          <div className="flex ">
            <h1 className="mb-4 font-bold">My to do</h1>
          </div>
          <input onChange={(e)=>{setInput(e.target.value)}}
            type="text"
            className=" w-[400px] mb-4 bg-amber-50 opacity-30  rounded-2xl "
            placeholder="กรอกได้แต่กดไม่ได้"
          ></input>{" "}
          <button  onClick={showText} className="border w-10 rounded-2xl bg-blue-300 hover:bg-yellow-300">
            {" "}
            Add{" "}
          </button>
          <hr className=" opacity-2" />
          <div className="flex flex-col  bg-white p-5  items-start  rounded-md mt-2">
            {output?.map((product, i) => (
              <ProductCard key={i} data={product} />
            ))}
          </div>
        </div>
      </from>
    </>
  );
}

export default product;
