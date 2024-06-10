import User from "./user";

export default function Profile() {
    return(
        <div className="profile">
            <User
            name={'sajid'} number={123465667} Id={1}
            />
            <User
            name={'faizan'} number={123465667} Id={2}
            />
            <User
            name={'amir'} number={123465667} Id={3}
            />
            

        </div>
    )
}