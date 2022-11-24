import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import './Profile.css';

const Profile = () => {


    const {user, setUser}= useContext(UserContext);

   console.log(user.name);

    return (
        

        <form action="#" className="form-group">
            
            <input type="text" placeholder="name" name="name" className="name" defaultValue={ user.name } />
            <input type="text" placeholder="lastName" name="lastName" className="lastName" defaultValue={ user.lastName }/>
            <input type="text" placeholder="email" name="email" className="email" defaultValue={ user.email }/>
            <input type="password" placeholder="password" name="password" className="passwd" defaultValue={ user.password } />
            <button href="#" type="submit" className="btn btn-primary">Sign in</button>
        </form>

        
    )
}

export default Profile