import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Counter from "./counter";
import Profile from "./props/profile";
import Auth from "./condition";
import AccountStatus from "./ifElse";
import Login from "./loggin";
// import Registration from "./register";
import BindingRegistration from "./bindingRegister";

export default function App() {
    return(
        <>
            <Header />
            <Auth />
            <BindingRegistration />
            <AccountStatus />
            <Main />
            <Profile />
            <Login />
            <Footer />
            <Counter />
        </>
    )
}