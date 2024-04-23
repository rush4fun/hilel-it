import React, {useContext} from 'react';

import UsersContext from './../../contexts/UsersContext';

export default function RestartBtn() {
    const {setFirstUser} = useContext(UsersContext);
    const {setSecondUser} = useContext(UsersContext);
    const {showRestartBtn} = useContext(UsersContext);
    const {setShowRestartBtn} = useContext(UsersContext);
    const {setShowBtnBattle} = useContext(UsersContext);
    const {setFirstUserTotalScore} = useContext(UsersContext);
    const {setSecondUserTotalScore} = useContext(UsersContext);
    const {setBattleResult} = useContext(UsersContext);

    const handleClick = () => {
        setFirstUser({});
        setSecondUser({});
        setShowRestartBtn(false);
        setShowBtnBattle(false);
        setFirstUserTotalScore(-1);
        setSecondUserTotalScore(-1);
        setBattleResult({});
    }

    return showRestartBtn ? <button onClick={handleClick}>Restart</button> : null
} 