

export default function Login() {
    return (
        
        <form onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(e.target)
            const username = formData.get('username')
            const password = formData.get('password')
            fetch("http:/localhost:3000/api.login", {
                body: {
                    username,
                    password,
                },
                method: 'POST'
            })
        }}>
            <label htmlFor="">log in</label>
            <br />
            <input type="text" id="username"
            onChange={(e) => {
                console.log(e.target.value)
            }}
            name='username'
            />
            <br />
            <label htmlFor=""></label>
            <br />
            <input type="password" id="password"
                onKeyDown={(e) => {
                    console.log(e.target)
                }}
            name="password"
            
            />
            <br />
            <button>Login</button>

        </form>
    )
}