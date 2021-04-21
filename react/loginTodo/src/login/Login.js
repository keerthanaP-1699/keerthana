import React, { useState } from "react";
import { useForm } from "react-hook-form";

import Submit from "./Submit";
import "../styles/Login.css";

/**
 * we defaultly create a email and password to check with the login credentials
 * we have two states for email and password to check with the details given by the user
 */
export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  const [newpassword, setPassword] = useState(" ");
  const [email, setEmail] = useState("");
  const checkData = [{ email: "keerthana@gmail.com", password: "Kee@12345" }];

  /**
   * when email and password matchs it redirects to next page
   * when email is not matched gives an alert of 'email doesn't match'
   * when email and password doesn't match shows an alert 'email and password doesn't match'
   */
  const onSubmit = () => {
    if (email === checkData[0].email && newpassword === checkData[0].password) {
      Submit();
    } else if (email !== checkData[0].email) {
      alert("email doesn't match");
    } else {
      alert("email and password doesn't match");
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="login">
        <h1>login form</h1>
        <div className="login-inputs">
          <label className="login-label">email</label>
          {/* here we give the credentials where thw email is required and what pattern it should follow 
          if fail to exist gives a error message and 
          email is send to the email state */}
          <input
            className="login-input"
            id="email"
            {...register("email", {
              required: "required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Entered value does not match email format",
              },
            })}
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="login-inputs">
          <label className="login-label">Password</label>
          {/* here we give the credentials where thw password is required, min and max length and what pattern it should follow 
          if fail to exist gives a error message and 
          password is send to the password state */}
          <input
            className="login-input"
            {...register("Password", {
              required: "required",
              minLength: {
                value: 8,
                message: "min length is 8",
              },
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message: "password is not secure",
              },
            })}
            placeholder="enter your password"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.Password && <span>{errors.Password.message}</span>}
        </div>

        <div>
          <button className="login-input-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
