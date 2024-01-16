import React, { useContext } from 'react' 
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {UserContext} from '../context/UserContext'


import './Header.css'
const Header = ({title})=>{
    const [token,setToken] = useContext(UserContext)

    const handleLogout = () =>{
        setToken(null)
    }

    return (
        <div className="header">
            <h1 className="title">{title}</h1>
            {token && (<button className="button_log_out" onClick={handleLogout}><AccountCircleIcon/></button>)}
        </div>
    )
}

export default Header;