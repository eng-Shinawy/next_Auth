"use server";
import {  z } from "zod";
import { LoginSchema,RegisterSchema } from "../utils/ValidationSchmes";

//Login Action 
export const loginAction = async (data:z.infer<typeof LoginSchema>)=>{
    const validation = LoginSchema.safeParse(data);
    if (!validation.success)
        return {error:validation.error.issues[0].message};
console.log(data);
return {success:"Logged in successfully"}
}

//Register Action
export const registerAction = async (data:z.infer<typeof RegisterSchema>)=>{
    const validation = LoginSchema.safeParse(data);
    if (!validation.success)
        return {error:"Invalid credentials"};
console.log(data);
return {success:"Register successfully"}
}