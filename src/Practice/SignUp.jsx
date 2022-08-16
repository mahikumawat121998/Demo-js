import React ,{useState} from 'react'
import "./SignUp.css"

const SignUp = () => {
    const [Data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        mobile:"",
        date:"",
        password:"",
        ConfirmPassword:""
        
    });
    const handleChange=(e)=>{
        setData(previous=>({...previous,[e.target.name]:e.target.value}))
        console.log(Data);

    }
  return (
    <div className='Container'>
        <form action="" className='my-form'>
        <h2 className='my-h2'>Login</h2>

            <div className='login-div'>                        
            <input type="text" name='firstname' placeholder='Enter First Name'  autoComplete='off' onChange={handleChange}/>
            <input type="text" name="lastname"  placeholder='Enter Your Last Name' autoComplete='off' onChange={handleChange}/>
            </div>
            <input type="email" name='email' placeholder='Enter Your Email Id' onChange={handleChange}/>
            <input type="text" name='mobile' placeholder='Enter Mobile Number' onChange={handleChange}/>
            <input type="date" name="date" placeholder='select Date' onChange={handleChange}/>
            <input type="text" name='password'placeholder='Enter Your Password' onChange={handleChange} />
            <input type="text" name='ConfirmPassword' placeholder='Re Enter Your Password'  onChange={handleChange}/>
            <button className='my-btn'>Submit</button>
        </form>
    </div>
  )
}

export default SignUp