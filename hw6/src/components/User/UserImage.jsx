import React, {useContext} from 'react';
import UsersContext from './../../contexts/UsersContext';

import UserScore from '../UserScore/UserScore';

export default function UserImage ({selectedUser, selectedUserRepo, setTotalScore, user, setUser}) {
    const {showUserScore} = useContext(UsersContext);
    const {showUserRestartBtn} = useContext(UsersContext);

    const handleResetBtnClick = (e) => {
        e.preventDefault();

        setUser({});
    }

    return ((selectedUser && Object.keys(selectedUser).length) ? 
    <form method="POST" onSubmit={handleResetBtnClick}>
        <figure>
            <img src={user[`avatar_url`]} alt="" />
            <figcaption><strong>@{user.login}</strong></figcaption>
        </figure>
        {showUserRestartBtn ? <button>Reset</button> : null}
        {showUserScore ? <UserScore currentUser={user} currentUserRepo={selectedUserRepo} setTotalScore={setTotalScore}/> : null}
    </form> : null )
}