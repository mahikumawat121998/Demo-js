import React,{useState} from 'react'
import "./UseState.css"


const UseState = () => {
    const [InputChange, setInputChange] = useState("")
    const [Number, setNumber] = useState(0);
    const handleIncrease=()=>{
        setNumber((previous)=>previous+1);
    }
    const AsynchandleIncrease=()=>{
        setTimeout(() => {
        setNumber((previous)=>previous +1);
            
        }, 2000);
    }
    const [User, setUser] = useState({
        username:"Mahesh Kumawat",
        email:"mahikumawat121998@gmail.com",
        img:"test.png"
    })
    const [Intiallization, setIntiallization] = useState();
    const handleChange =()=>{
        setUser(previous=>({...previous,username:InputChange}));

    }
    console.log(User);
    const [myNewInputChange, setmyNewInputChange] = useState({
        username:"",
        surname:"",
        mobileNumber:"",
    })
    const myhandleChange =(e)=>{
        setmyNewInputChange(previous=>({...previous,[e.target.name]:e.target.value}))
    }
    console.log(myNewInputChange);
  return (
    <div className='main-container'>
        <h2>{Number}</h2>
        <input type="text" placeholder='Enter your Username' onChange={e=>setInputChange(e.target.value)} />
        {InputChange}
        {/* first Solution */}
     {Intiallization&& <h2>{Intiallization.username}</h2>}
     {/* second Solution     */}
     {/* <h2>{Intiallization?.username}</h2> */}
     <h2>{User?.username}</h2>
     <button onClick={handleChange}>Handle Change</button>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={ AsynchandleIncrease}>AsyncIncrease</button>
        <input type="text" name='username' onChange={myhandleChange} />
        <input type="text" name='surname' onChange={myhandleChange} />
        <input type="text" name='mobileNumber' onChange={myhandleChange} />
    </div>
  )
}

export default UseState