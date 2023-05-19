
import { object, string, number,ref } from 'yup';
export const userSchema = object({
    name: string().required("Name is required"),
    email: string().email().required("Email is required"),
    password:string().required("Password is required").matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number"
    ),
    confirmPass:string().oneOf([ref('password'),null],"Pass must match")
  });

  export const userLogin = object({
    email: string().email().required("Name is required"),
    password:string().required("Password is required")
  });