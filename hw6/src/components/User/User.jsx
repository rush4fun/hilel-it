import React, {useContext, useState, useEffect} from 'react';
import UsersContext from './../../contexts/UsersContext';

import UserScore from '../UserScore/UserScore';

import service from '../../service/restusers';

export default function User ({title, selectedUser, setSelectedUser, selectedUserRepo=0, disabledUser={}, setTotalScore, battleResult}) {

    const [user, setUser] = useState({});
    const [isUserChosen, setIsUserChosen] = useState(false);
    const [battleLabel, setBattleLabel] = useState();

    const {showUserScore} = useContext(UsersContext);

    const handleSubmitUser = async (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);
        const response = await service.getUser(formData.get('username'));

        if (response) {
            if (disabledUser.login === response.login) {
                setIsUserChosen(true);
                return false;
            } else {
                setIsUserChosen(false);
            }
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
                {(selectedUser && Object.keys(selectedUser).length) ? <><figure>
                        <img src={user[`avatar_url`]} alt="" />
                        <figcaption><strong>@{user.login}</strong></figcaption>
                    </figure>
                    <button onClick={handleResetBtnClick}>Reset</button>
                    {showUserScore ? <UserScore currentUser={user} currentUserRepo={selectedUserRepo} setTotalScore={setTotalScore}/> : null}
                    </> : null }
                { (!selectedUser || !Object.keys(selectedUser).length) ? <>
                    <label htmlFor="username">
                    Choose <strong>{title}</strong> username:
                    </label>
                    <input className={!user ? "error" : ""} name="username" id="username" type="text" placeholder={title} required/>
                    {!user ? <strong className="error">Username not exist</strong> : null}
                    {isUserChosen ? <strong className="error">Username has already been chosen</strong> : null}
                    <button type="submit">Submit</button>
                </> : null } 
            </form>
        </div>
    )
}