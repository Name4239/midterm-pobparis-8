import React from "react";
import api from "../api/mainApi";

function ProductCard(props) {

  const { content, createdAt, id, isdone, updatedAt, userId } = props.data;

const deleteId= async()=> {
    console.log(props.data.id)
    try {
      const fillter = await api.delete(`/todos/8/${props.data.id}`,{
         
    })
      
    } catch (error) {
       console.log(error)
    }

  }

  return (
    <div className="flex   w-full ">
      <div className="flex    justify-between  w-full gap-3 ">
        <div className="">
          <input type="checkbox"></input> {content}{" "}
        </div>
        <div className=" gap-4 flex  ">
          {" "}
          <button className=" border w-[70px]  ">Edit</button>{" "}
          <button className="border w-[30px] h-[30px] bg-red-600 text-amber-50 rounded-2xl" onClick={deleteId}>x</button>{" "}
        </div>{" "}
      </div>
    </div>
  );
}

export default ProductCard;
