export default function User({name, number, Id}) {
    
    return (
        <div className="user">
            <h3>Name: {name}</h3>
            <h3>Num: {number}</h3>
            <h3>ID: {Id}</h3>
        </div>
        )
}