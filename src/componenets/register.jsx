import { useState } from "react"


export default function Registration() {

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const disable = !username || !password || !email;

    return(
        <div>
            <h1>Registration Form</h1>
            <label htmlFor="">username</label>
            <br />
            <input
             type="text"
             value={username}
             onChange={(e) => {
                setUsername(e.target.value)
                console.log(username)
            }}
             />
            <br />
            <label htmlFor="">password</label>
            <br />
            <input 
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
                console.log(password)
            }}
            />
            <br />
            <label htmlFor="">email</label>
            <br />
            <input 
            type="text"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
                console.log(email)
            }}
            />
            <br />
            <button disabled={disable}>sign up</button>
            
            
    
        </div>
    )
}