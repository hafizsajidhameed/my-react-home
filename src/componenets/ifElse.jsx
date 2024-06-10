export default function AccountStatus() {
    const status = null;
    if(status === 'active') {
        return (
            <h2>you are virified</h2>
        )
    } else if(status === 'blocked') {
        return(
            <h2>your account has been blocked</h2>
        )
    } else {
        return (
            <h2>sing up</h2>
        )
    }

}