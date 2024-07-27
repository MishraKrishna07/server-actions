"use client"
import { SubmitActions } from "@/actions/form";
import { useRef } from "react";

export default function Home() {

  let ref = useRef()
  
  return (
    <div>
      <form ref={ref} action={(e)=>{SubmitActions(e); ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name</label>
          <input name="name" id="name" className="text-black border border-black" type="text" />
        </div>
        <div>
          <label htmlFor="name">Adress</label>
          <input name="add" id="add" className="text-black border border-black" type="text" />
        </div>
        <div>
          <button className="border border-black">Submit</button>
        </div>
      </form>
    </div>
  );
}
