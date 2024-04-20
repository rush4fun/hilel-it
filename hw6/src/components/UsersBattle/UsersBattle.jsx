import React from 'react';
import {useState, useEffect} from 'react';
import './style.sass';

import User from '../User/User';
import BtnBattle from '../BtnBattle/BtnBattle';
import RestartBtn from '../RestartBtn/RestartBtn';

import UsersContext from './../../contexts/UsersContext';

export default function GitUsersBattle() {

    const [firstUser, setFirstUser] = useState({});
    const [firstUserRepo, setFirstUserRepo] = useState(0);
    const [secondUser, setSecondUser] = useState({});
    const [secondUserRepo, setSecondUserRepo] = useState(0);
    const [showBtnBattle, setShowBtnBattle] = useState(false);
    const [showUserScore, setShowUserScore] = useState(false);
    const [firstUserTotalScore, setFirstUserTotalScore] = useState(-1);
    const [secondUserTotalScore, setSecondUserTotalScore] = useState(-1);
    const [battleResult, setBattleResult] = useState({});
    const [showRestartBtn, setShowRestartBtn] = useState(false);

    useEffect(() => {
        Object.keys(firstUser).length && Object.keys(secondUser).length ? setShowBtnBattle(true) : setShowBtnBattle(false);
    }, [firstUser, secondUser])

    useEffect(() => {
        if(firstUserTotalScore >= 0 && secondUserTotalScore >= 0){
            setBattleResult({
                first: firstUserTotalScore>=secondUserTotalScore,
                second: secondUserTotalScore>=firstUserTotalScore
            })
        }
    }, [firstUserTotalScore, secondUserTotalScore])

    return (
        <>
            <h1>Let's Get Ready to Rumble 🥊</h1>
            <UsersContext.Provider value={{
                firstUser,
                setFirstUser,
                setFirstUserRepo,
                secondUser,
                setSecondUser,
                setSecondUserRepo,
                showBtnBattle,
                setShowBtnBattle,
                showUserScore,
                setShowUserScore,
                setFirstUserTotalScore,
                setSecondUserTotalScore,
                battleResult,
                setBattleResult,
                showRestartBtn,
                setShowRestartBtn
            }}>
                <div className="forms-wrapper">
                    <User title="Player 1" 
                          selectedUser={firstUser}
                          setSelectedUser={setFirstUser} 
                          selectedUserRepo={firstUserRepo} 
                          disabledUser={secondUser}
                          setTotalScore={setFirstUserTotalScore}
                          battleResult={battleResult.first}
                    />
                    <User title="Player 2" 
                          selectedUser={secondUser}
                          setSelectedUser={setSecondUser} 
                          selectedUserRepo={secondUserRepo} 
                          disabledUser={firstUser} 
                          setTotalScore={setSecondUserTotalScore}
                          battleResult={battleResult.second}
                    />
                </div>
                <BtnBattle />
                <RestartBtn />
            </UsersContext.Provider>
        </>
    )
}