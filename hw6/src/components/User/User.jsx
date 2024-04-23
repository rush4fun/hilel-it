import React, {useContext, useState, useEffect} from 'react';
import UsersContext from './../../contexts/UsersContext';

import UserImage from './UserImage';
import UserFormContent from './UserFormContent';

export default function User ({title, selectedUser, setSelectedUser, selectedUserRepo=0, disabledUser={}, setTotalScore, battleResult}) {

    const [user, setUser] = useState({});
    const [battleLabel, setBattleLabel] = useState();

    useEffect(() => {
        if (user && Object.keys(user).length) {
            setSelectedUser(user);
        } else {
            setSelectedUser({});
        }
    }, [user]);

    useEffect(() => {
        if (battleResult === undefined) {
            setBattleLabel(null);
        }
        if (battleResult === true) {
          setBattleLabel(`Winner 🥳`);
        } else if (battleResult === false) {
          setBattleLabel(`Loser 🥵`);
        }
    }, [battleResult]);

    return (
        <div>
            {battleLabel ? <p>{battleLabel}</p> : null }
            <div className="user-wrapper">
                <UserImage selectedUser={selectedUser} selectedUserRepo={selectedUserRepo} setTotalScore={setTotalScore} user={user} setUser={setUser}/>
                <UserFormContent selectedUser={selectedUser} title={title} disabledUser={disabledUser} setUser={setUser}/>
            </div>
        </div>
    )
}