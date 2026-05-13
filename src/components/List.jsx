import TodoItem from "./TodoItem"

export default function List(props) {
    return (
        <ul>
            {props.listItems.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    onToggle={props.onToggle}
                />
            ))}
        </ul>
    )
}