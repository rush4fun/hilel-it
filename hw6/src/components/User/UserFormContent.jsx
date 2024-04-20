import React, {useContext} from 'react';
import UsersContext from './../../contexts/UsersContext';

import Error from './Error';

export default function UserImage ({selectedUser, title, user, error}) {
    const {showUserScore} = useContext(UsersContext);

    return ( (!selectedUser || !Object.keys(selectedUser).length) ? 
    <>
        <label htmlFor="username">
            Choose <strong>{title}</strong> username:
        </label>
        <input className={!user ? "error" : ""} name="username" id="username" type="text" placeholder={title} required/>
        <Error text={error} />
        <button type="submit">Submit</button>
    </> : null )
}