import Link from "next/link";
import React from "react";
import RegisterForm from "./RegisterForm";

function RigisterPage() {
  return (
    <div>
      <section className=" p-1 rounded-md hover:bg-amber-800 transition-all duration-1000">
        <div className="bg-white shadow-md rounded-md p-5 ">
          <h1 className="font-bold text-3xl text-center text-blue-800">
            Sign in to Your Account
          </h1>
          {/*rigister form */}
          <RegisterForm/>
          <p className="p-1 mt-3">
            Already have an account?
            <Link
              href="/login"
              className="text-blue-700 underline underline-offset-5  mx-1"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default RigisterPage;
