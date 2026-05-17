import { useState } from "react";
import TodoItem from "./TodoItem"

export default function List(props) {
    const [value, setValue] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        //todo: add validation checks to onListItemAdd()
        props.onListItemAdd(value, props.id);
        setValue("");
    }

    return (
        <div className="list-component">
            <div className="list-tools">
                <a onClick={props.onListDelete}>🗑️</a>
            </div>
            <h2 className="list-title">Title: <span>{props.title}</span></h2>
            <ul>
                {props.listItems.map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onToggle={props.onListItemToggle}
                    />
                ))}
            </ul>

            <form className="list-form" onSubmit={handleSubmit}>
                <input
                    placeholder="New quest task..."
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />

                <button className="list-form-button" type="submit">
                    Add Quest Task
                </button>
            </form>
        </div>
    );
}