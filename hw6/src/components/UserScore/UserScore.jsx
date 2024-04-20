import React, {useState, useEffect, useContext} from 'react';

import UsersContext from './../../contexts/UsersContext';

export default function UserScrore({currentUser={}, currentUserRepo=0, setTotalScore}) {

    useEffect(() => {
        setTotalScore(Object.keys(currentUser).length ? currentUser.followers + currentUserRepo : currentUserRepo);
    }, [])

    return <ul>
        <li>Followers: {Object.keys(currentUser).length ? currentUser.followers : 0}</li>
        <li>Repositories stars: {currentUserRepo}</li>
        <li><strong>Total score: {Object.keys(currentUser).length ? currentUser.followers + currentUserRepo : currentUserRepo}</strong></li>
    </ul>
} 