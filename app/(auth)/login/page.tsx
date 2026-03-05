import Link from "next/link";
import React from "react";
import LoginForm from "./LoginForm";

function LoginPage() {
  return (
    <div>
      <section className=" p-1 rounded-md hover:bg-amber-800 transition-all duration-1000">
        <div className="bg-white shadow-md rounded-md p-5 ">
          <h1 className="font-bold text-3xl text-center text-blue-800">
            Sign in to Your Account
          </h1>
          {/*Login form */}
          <LoginForm />
          <p className="p-1 mt-3">
            Do not have an account?
            <Link
              href="/register"
              className="text-blue-700 underline underline-offset-5  mx-1"
            >
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;
