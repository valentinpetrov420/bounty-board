export default function TodoItem(props) {
    return <li
        className={`todo-item ${props.completed ? "completed" : ""}`}
        onClick={() => props.onToggle(props.id)}>
        {props.text}
    </li>
}