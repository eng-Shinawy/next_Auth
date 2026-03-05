import {z} from "zod";

export const LoginSchema = z.object({
    email: z.email({message:"Invalid email"}),
    password: z.string().min(6,{message:"Password must be at least 6 characters long "})
});

export const RegisterSchema = z.object({
    name:z.string().min(2,{message:"Name must be at least 2 character"}),
    email: z.email({message:"Invalid email"}),
    password: z.string().min(6,{message:"Password must be at least 6 characters long "})
});

