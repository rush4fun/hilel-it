import React from 'react';
import {useState, useEffect} from 'react';
import './style.sass';

import User from '../User/User';
import BtnBattle from '../BtnBattle/BtnBattle';
import RestartBtn from '../RestartBtn/RestartBtn';

import useUsersBattle from '../../hooks/useUsersBattle';

import UsersContext from './../../contexts/UsersContext';

export default function GitUsersBattle() {

    const userBattle = useUsersBattle();

    return (
        <>
            <h1>Let's Get Ready to Rumble 🥊</h1>
            <UsersContext.Provider value={{...userBattle}}>
                <div className="forms-wrapper">
                    <User title="Player 1" 
                          selectedUser={userBattle.firstUser}
                          setSelectedUser={userBattle.setFirstUser} 
                          selectedUserRepo={userBattle.firstUserRepo} 
                          disabledUser={userBattle.secondUser}
                          setTotalScore={userBattle.setFirstUserTotalScore}
                          battleResult={userBattle.battleResult.first}
                    />
                    <User title="Player 2" 
                          selectedUser={userBattle.secondUser}
                          setSelectedUser={userBattle.setSecondUser} 
                          selectedUserRepo={userBattle.secondUserRepo} 
                          disabledUser={userBattle.firstUser} 
                          setTotalScore={userBattle.setSecondUserTotalScore}
                          battleResult={userBattle.battleResult.second}
                    />
                </div>
                <BtnBattle />
                <RestartBtn />
            </UsersContext.Provider>
        </>
    )
}