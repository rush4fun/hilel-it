import React, { useState, useEffect, useRef } from "react";
import "./TodoList.sass";
import { todos as service } from "./../service/todos";

export default function TodosList() {
    const [todosCol1, setTodosCol1] = useState([]);
    const [todosCol2, setTodosCol2] = useState([]);
    const [todosCol3, setTodosCol3] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await service.get();
            setTodosCol1(response.slice(0, 10));
        })();
    }, []);

    const handleMoveToRight = (event) => {
        if (event.target.dataset.list === "col1") {
            setTodosCol2((prevState) => [todosCol1[0], ...prevState]);
            setTodosCol1(todosCol1.slice(1, todosCol1.length));
        } else {
            setTodosCol3((prevState) => [todosCol2[0], ...prevState]);
            setTodosCol2(todosCol2.slice(1, todosCol2.length));
        }
    };

    const handleMoveToLeft = (event) => {
        setTodosCol1((prevState) => [todosCol2[0], ...prevState])
        setTodosCol2(todosCol2.slice(1, todosCol1.length));
    };

    const handleRemoveLastItem = () => {
        setTodosCol3((prevState) => prevState.filter((item) => item.id !== todosCol3[todosCol3.length - 1].id));
    };

    return (
        <div className="list-wrapper">
            <div>
                <ul>
                    {todosCol1.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                {todosCol1.length ? 
                    <button data-list="col1" onClick={(event) => handleMoveToRight(event)}>Transfer first to right</button> 
                : null}
            </div>
            <div>
                <ul>
                    {todosCol2.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                {todosCol2.length ?
                    <div className="list-btn-wrapper">
                        <button onClick={() => handleMoveToLeft()}>Transfer first to left</button> 
                        <button onClick={(event) => handleMoveToRight(event)}>Transfer first to right</button> 
                    </div>
                : null}
            </div>
            <div>
                <ul>
                    {todosCol3.map((item, index) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
                {todosCol3.length ? 
                    <button onClick={() => handleRemoveLastItem()}>Remove last item</button> 
                : null}
            </div>
        </div>
    )
}