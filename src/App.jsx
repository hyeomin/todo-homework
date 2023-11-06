import React, { useState } from "react";
import "./App.css";
import Working from "./Working";
import Done from "./Done";

function App() {
    const [todoList, setTodoList] = useState([
        { id: 0, title: "test", body: "test", isDone: false },
    ]);

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleChangeHandler = function (event) {
        setTitle(event.target.value);
    };

    const bodyChangeHandler = function (event) {
        setBody(event.target.value);
    };

    const onSubmitHandler = function (event) {
        event.preventDefault();
        const newTodo = {
            id: todoList.length + 1,
            title,
            body,
            isDone: false,
        };
        setTodoList([...todoList, newTodo]);
    };

    const removeBtnHaldler = function (id) {
        const newTodoArr = todoList.filter(function (item) {
            return item.id !== id;
        });
        setTodoList(newTodoArr);
    };

    const doneBtnHandler = function (id) {
        const newTodoArr = todoList.map(function (item) {
            if (item.id === id) {
                return { ...item, isDone: true };
            }
            return item;
        });
        setTodoList(newTodoArr);
    };

    const cancelBtnHandler = function (id) {
        const newTodoArr = todoList.map(function (item) {
            if (item.id === id) {
                return { ...item, isDone: false };
            }
            return item;
        });
        setTodoList(newTodoArr);
    };

    return (
        <div className="full-wrapper">
            <nav className="navigation-bar">
                <span className="app-title">My To Do List</span>
                <span className="logo">React</span>
            </nav>
            <form className="submit-form" onSubmit={onSubmitHandler}>
                제목 &nbsp;
                <input
                    className="title-box"
                    value={title}
                    onChange={titleChangeHandler}
                />
                내용 &nbsp;
                <input
                    className="body-box"
                    value={body}
                    onChange={bodyChangeHandler}
                />
                <button className="add-btn">추가하기</button>
            </form>
            <div className="working">
                <h2 className="working-label">Working..🔥</h2>
                {todoList
                    .filter(function (item) {
                        return item.isDone === false;
                    })
                    .map(function (item) {
                        return (
                            <Working
                                key={item.id}
                                item={item}
                                removeFunction={removeBtnHaldler}
                                doneFunction={doneBtnHandler}
                            />
                        );
                    })}
            </div>
            <div className="done">
                <h2 className="done-label">Done..!🎉</h2>
                {todoList
                    .filter(function (item) {
                        return item.isDone === true;
                    })
                    .map(function (item) {
                        return (
                            <Done
                                key={item.id}
                                item={item}
                                removeFunction={removeBtnHaldler}
                                cancelFunction={cancelBtnHandler}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default App;
