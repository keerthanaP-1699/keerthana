import React,{useState} from "react";
import { useForm } from "react-hook-form";
import "./App.css"

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm({mode : "onChange"});
  const [newpassword, setNewPassword] = useState(" ");
  const [confirmpassword, setConfirmPassword] = useState(" ");
    
  const onSubmit = () => {
    console.log(newpassword,confirmpassword);
    if(newpassword !== confirmpassword){
      alert("please enter the same password");
    }else{
    alert("login successful");
    }
  };

  return (
    <div className='login'>
    <form onSubmit={handleSubmit(onSubmit) } className='login'> 
    <h1>
      login form
    </h1>
      <div className='login-inputs'>
        <label className='login-label'>firstname</label>
          <input
            className='login-input' 
            {...register("firstname", {
              required:"required"
            })}   
          placeholder="firstname" />
        {errors.firstname && <span role="alert">{errors.firstname.message}</span>}
      </div>
      
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
          />
        {errors.email && <span >{errors.email.message}</span>}
      </div>

      <div className="login-inputs">
        <label className="login-label">Password</label>
          <input 
            className='login-input'
            {...register("newpassword",{ required: "required", 
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
            type="newpassword"              
            onChange={(e) => setNewPassword(e.target.value)}
          />
        {errors.newpassword && <span>{errors.newpassword.message}</span>}
      </div>
              
      <div className="login-inputs">
        <label htmlFor="login-label">Confirm Password</label>
          <input 
            className='login-input'
            {...register("confirmpassword",{ required: "required", 
              minLength:{
                value:8,
                message:"min length is 8"
              },
              pattern: {
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/,
                message:"password is not secure"
              }
            })}
            placeholder="enter the password again"
            type="confirmpassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        {errors.confirmpassword && <span>{errors.confirmpassword.message}</span>}
      </div>
      
      <div>
        <button className='login-input-btn' type="submit">Login</button>
      </div>
    </form>
    </div>
  );
}
