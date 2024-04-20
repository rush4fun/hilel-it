import React, {useState} from 'react';

import UsersContext from './../../contexts/UsersContext';

export default function Error({text}) {


    return text ? <strong className="error">{text}</strong> : null
} 