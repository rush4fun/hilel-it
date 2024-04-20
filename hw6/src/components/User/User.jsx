import React, {useContext, useState, useEffect} from 'react';
import UsersContext from './../../contexts/UsersContext';

import UserImage from './UserImage';
import UserFormContent from './UserFormContent';

import service from '../../service/restusers';

export default function User ({title, selectedUser, setSelectedUser, selectedUserRepo=0, disabledUser={}, setTotalScore, battleResult}) {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [battleLabel, setBattleLabel] = useState();

    const {showUserScore} = useContext(UsersContext);

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
    }

    const handleResetBtnClick = () => {
        setUser({});
    }

    useEffect(() => {
        if (user && Object.keys(user).length) {
            setSelectedUser(user);
        } else {
            setSelectedUser({});
        }
    }, [user]);

    useEffect(() => {
        if (battleResult === true) {
          setBattleLabel(`Winner 🥳`);
        } else if (battleResult === false) {
          setBattleLabel(`Loser 🥵`);
        }
    }, [battleResult]);

    return (
        <div>
            {battleLabel ? <p>{battleLabel}</p> : null }
            <form method="POST" onSubmit={handleSubmitUser}>
                <UserImage selectedUser={selectedUser} user={user} handleResetBtnClick={handleResetBtnClick} selectedUserRepo={selectedUserRepo} setTotalScore={setTotalScore} />
                <UserFormContent selectedUser={selectedUser} title={title} user={user} error={error}/>

            </form>
        </div>
    )
}