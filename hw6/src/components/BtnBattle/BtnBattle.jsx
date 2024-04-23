import React, {useContext} from 'react';

import UsersContext from './../../contexts/UsersContext';

import service from '../../service/restusers';

export default function BtnBattle() {
    const {showBtnBattle} = useContext(UsersContext);
    const {setShowBtnBattle} = useContext(UsersContext);
    const {firstUser} = useContext(UsersContext);
    const {secondUser} = useContext(UsersContext);
    const {setFirstUserRepo} = useContext(UsersContext);
    const {setSecondUserRepo} = useContext(UsersContext);
    const {setShowUserScore} = useContext(UsersContext);
    const {setShowRestartBtn} = useContext(UsersContext);
    const {setShowUserRestartBtn} = useContext(UsersContext);

    const handleClick = async () => {
        const responseFirstUser = await service.getUserRepositories(firstUser.login);
        const responseSecondUser = await service.getUserRepositories(secondUser.login);

        let firstUserRepo = 0;
        let secondUserRepo = 0;

        responseFirstUser.forEach(repo => {
            firstUserRepo += repo.stargazers_count;
        });

        responseSecondUser.forEach(repo => {
            secondUserRepo += repo.stargazers_count;
        });

        setFirstUserRepo(firstUserRepo);
        setSecondUserRepo(secondUserRepo);
        setShowUserScore(true);
        setShowBtnBattle(false);
        setShowRestartBtn(true);
        setShowUserRestartBtn(false);
    }

    return showBtnBattle ? <button className="button" onClick={handleClick}>Battle!</button> : null
} 