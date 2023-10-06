import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {
    const {user} = useContext(UserContext)
    if (!user) return <h2>Please Login</h2>
    return <h2>Welcome {user.userName}</h2>
}

export default Profile