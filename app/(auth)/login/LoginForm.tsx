"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { useState } from "react";
import { LoginSchema } from "@/app/utils/ValidationSchmes";
import Alert from "@/app/components/Alert";
import Spinner from "@/app/components/Spinner";
import { loginAction } from "@/app/actions/auth.action";
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [clientError, setClientError] = useState("");
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation = LoginSchema.safeParse({ email, password });
    if (!validation.success) {
      return setClientError(validation.error.issues[0].message);
    }
    loginAction({ email, password }).then((result)=>{
      if (result?.error) setServerError(result.error);
      if (result?.success) setServerSuccess(result.success);

    });  //this we will remove it and replace it with code & api end point to check the password and email is exists in DB
    setEmail("");
    setPassword("");
    setClientError("");
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div className="flex flex-col mb-3">
          <label className=" p-1 text-slate-500 font-bold " htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            className=" bg-amber-100 text-slate-500 rounded-lg px-2 py-1 text-xl "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col mb-3">
          <label className=" p-1 text-slate-500 font-bold " htmlFor="password">
            PassWord
          </label>
          <input
            type="password"
            id="password"
            className=" bg-amber-100 text-slate-500 rounded-lg px-2 py-1 text-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
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
              <IoMdLogIn className="me-1 text-2xl" /> Login
            </>
          )}
        </button>
        <div className=" mt-6 flex items-center justify-center gap-6">
          <div className="bg-blue-200  border px-4 py-2 hover:bg-blue-200 rounded w-1/2 flex justify-center items-center">
            <FcGoogle className="text-4xl" />
          </div>
          <div className="bg-slate-200  border px-4 py-2 hover:bg-slate-200 rounded w-1/2 flex justify-center items-center">
            <FaGithub className="text-4xl" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
