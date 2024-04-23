import React, {useContext, useState} from 'react';
import UsersContext from './../../contexts/UsersContext';

import Error from './Error';

import service from '../../service/restusers';

export default function UserFormContent ({selectedUser, title, disabledUser, setUser}) {
    const {setShowUserRestartBtn} = useContext(UsersContext);

    const [error, setError] = useState('');

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        const response = await service.getUser(formData.get('username'));

        if (response) {
            if (disabledUser.login && (disabledUser.login === response.login)) {
                setError('Username has already been chosen');
                return false;
            } else {
                setError('');
            }
        } else {
            setError('Username not exist');
        }

        setUser(response);
        setShowUserRestartBtn(true);
    }

    return ( (!selectedUser || !Object.keys(selectedUser).length) ? 
    <form method="POST" onSubmit={handleSubmitUser}>
        <label htmlFor="username">
            Choose <strong>{title}</strong> username:
        </label>
        <input className={error ? "error" : ""} name="username" id="username" type="text" placeholder={title} required/>
        <Error text={error} />
        <button type="submit">Submit</button>
    </form> : null )
}