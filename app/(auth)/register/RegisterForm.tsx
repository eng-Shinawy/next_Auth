"use client";
import {FcGoogle} from "react-icons/fc";
import {FaGithub} from "react-icons/fa";
import { BsPersonPlus } from "react-icons/bs";
import { useState } from "react";
import { registerAction } from "@/app/actions/auth.action";
import { RegisterSchema } from "@/app/utils/ValidationSchmes";
import Spinner from "@/app/components/Spinner";
import Alert from "@/app/components/Alert";
function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [clientError, setClientError] = useState("");
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user={name, email, password };
    const validation = RegisterSchema.safeParse(user);
    if (!validation.success) {
      return setClientError(validation.error.issues[0].message);
    }
    registerAction({ name,email, password }).then((result)=>{
      if (result?.error) setServerError(result.error);
      if (result?.success) setServerSuccess(result.success);

    });  //this we will remove it and replace it with code & api end point to check the password and email is exists in DB
    setName("");
    setEmail("");
    setPassword("");
    setClientError("");
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="flex flex-col mb-3">
      <label className=" p-1 text-slate-500 font-bold "  htmlFor="name">
      Name
      </label >
      <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)} className=" bg-amber-100 text-slate-500 rounded-lg px-2 py-1 text-xl ">
      </input>
      </div>
      <div className="flex flex-col mb-3">
      <label className=" p-1 text-slate-500 font-bold "  htmlFor="email">
      Email
      </label >
      <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} className=" bg-amber-100 text-slate-500 rounded-lg px-2 py-1 text-xl ">
      </input>
      </div>
      <div className="flex flex-col mb-3">
      <label className=" p-1 text-slate-500 font-bold "  htmlFor="password">
      PassWord
      </label >
      <input type="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} className=" bg-amber-100 text-slate-500 rounded-lg px-2 py-1 text-xl">
      </input>
      </div>
      {(clientError||serverError) && <Alert type="error" message={clientError||serverError} />}
        {serverSuccess && <Alert type="success" message={serverSuccess} />}

      <button
          disabled={loading}
          type="submit"
          className=" disabled:bg-gray-300 flex items-center justify-center w-full bg-slate-800 mt-4 text-white p-2 rounded-lg cursor-pointer gap-1 text-xl"
        >
          {loading ? (
            <Spinner />
          ) : (
            <>
              <BsPersonPlus className="me-1 text-2xl" /> Register
            </>
          )}
        </button>
      <div className=" mt-6 flex items-center justify-center gap-6">
        <div className="bg-blue-200  border px-4 py-2 hover:bg-blue-200 rounded w-1/2 flex justify-center items-center">
        <FcGoogle className="text-4xl"/>
      </div>
      <div className="bg-slate-200  border px-4 py-2 hover:bg-slate-200 rounded w-1/2 flex justify-center items-center">
        <FaGithub className="text-4xl"/>
      </div>
      </div>
      </form>
    </div>
  )
}

export default RegisterForm
