import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./login.css"

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode : "onChange"});
  const [newpassword, setPassword] = useState(" ");
  const [email, setEmail] = useState("");
  const checkData = [{email:'keerthana@gmail.com',password: "Kee@12345"}];
  const history= useHistory();
  
  const onSubmit = () => {
    if(email === checkData[0].email && newpassword === checkData[0].password){
      history.push('/todo');
    } else if(email !== checkData[0].email){
      alert("email doesn't match");
    } else{
      alert("email and password doesn't match");
    }
  };

  return (
    <div className='login'>
    <form onSubmit={handleSubmit(onSubmit) } className='login'> 
    <h1>
      login form
    </h1>
      <div className='login-inputs'>
        <label className="login-label">email</label>
          <input
          className='login-input'
            id="email"
            {...register("email",{
              required: "required",
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Entered value does not match email format"
              }
            })}
            placeholder="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        {errors.email && <span >{errors.email.message}</span>}
      </div>

      <div className="login-inputs">
        <label className="login-label">Password</label>
          <input 
            className='login-input'
            {...register("Password",{ required: "required", 
              minLength:{
                value:8,
                message:"min length is 8"
              },
              pattern: {
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message:"password is not secure"
              }
            })} 
            placeholder="enter your password"
            type="Password"              
            onChange={(e) => setPassword(e.target.value)}
          />
        {errors.Password && <span>{errors.Password.message}</span>}
      </div>
      
      <div>
        <button className='login-input-btn' type="submit">Login</button>
      </div>
    </form>
    </div>
  );
}
