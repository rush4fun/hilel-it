import React from "react";
import {useState, useEffect} from 'react';

export default function useUsersBattle() {
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
  
    return { 
        firstUser,
        setFirstUser,
        firstUserRepo,
        setFirstUserRepo,
        secondUser,
        setSecondUser,
        secondUserRepo,
        setSecondUserRepo,
        showBtnBattle,
        setShowBtnBattle,
        showUserScore,
        setShowUserScore,
        firstUserTotalScore,
        setFirstUserTotalScore,
        secondUserTotalScore,
        setSecondUserTotalScore,
        battleResult,
        setBattleResult,
        showRestartBtn,
        setShowRestartBtn
     };
  }