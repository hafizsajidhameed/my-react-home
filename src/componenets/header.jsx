function Logo() {
    return(
        <div>
            <h1>Logo</h1>   
        </div>
    )
};

function Navigations() {
    return(
        <div>
            <ul style={{backgroundColor: "orange",color: "white"}}>
                <li>home</li>
                <li>about</li>
                <li>news</li>
                <li>contact</li>
            </ul>
        </div>
    )
}

function SignInUp() {
    return(
        <div>
            <button>sign in</button>
            <button>sign up</button>
        </div>
    )
}

export default function Header() {
    return(
    <div>
      <Logo />
      <Navigations />
      <SignInUp />
    </div>
    )
}