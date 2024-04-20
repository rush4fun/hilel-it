import React, {useContext} from 'react';
import UsersContext from './../../contexts/UsersContext';

import UserScore from '../UserScore/UserScore';

export default function UserImage ({selectedUser, user, handleResetBtnClick, selectedUserRepo, setTotalScore}) {
    const {showUserScore} = useContext(UsersContext);

    return ((selectedUser && Object.keys(selectedUser).length) ? 
    <>
        <figure>
            <img src={user[`avatar_url`]} alt="" />
            <figcaption><strong>@{user.login}</strong></figcaption>
        </figure>
        <button onClick={handleResetBtnClick}>Reset</button>
        {showUserScore ? <UserScore currentUser={user} currentUserRepo={selectedUserRepo} setTotalScore={setTotalScore}/> : null}
    </> : null )
}