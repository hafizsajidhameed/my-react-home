import { useState } from "react"


export default function BindingRegistration() {
    const [formFeild, setFormfield] = useState({
        username:'',
        password: '',
        email: ''
    })

    console.log(formFeild)

    return(
        <form action="">

        <div>
            <h1>Registration Form</h1>
            <label htmlFor="">username</label>
            <br />
            <input
             type="text"
             value={formFeild.username}
             onChange={(e) => {
                setFormfield((currnetState) => ({
                    ...currnetState,
                    username: e.target.value 
                }))
            }}
             />
            <br />
            <label htmlFor="">password</label>
            <br />
            <input 
            type="password"
            value={formFeild.password}
            onChange={(e) => {
                setFormfield((currnetState) => ({
                    ...currnetState,
                    password: e.target.value 
                }))
            }}
            />
            <br />
            <label htmlFor="">email</label>
            <br />
            <input 
            type="text"
            value={formFeild.email}
            onChange={(e) => {
                setFormfield((currnetState) => ({
                    ...currnetState,
                    email: e.target.value 
                }))
            }}
            />
            <br />
            {/* <button disabled={disable}>sign up</button> */}
            
            
    
        </div>
        </form>
    )
}