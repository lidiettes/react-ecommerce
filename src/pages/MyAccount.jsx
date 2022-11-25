import { useContext, useEffect } from 'react';
import Profile from '../components/Profile/Profile';
import { UserContext } from '../context/UserContext/UserContext';

const MyAccount = () => {

    // //salvar error de usuario perdido
    // const { user, setUser } = useContext(UserContext);
    // const refresh = JSON.parse(sessionStorage.getItem("user"));
    // useEffect(() => {
    //     setUser(refresh)
    // }, [])

    

    return (
        <Profile />
    )
}

export default MyAccount