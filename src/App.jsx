import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function TodoItem(props) {
	return <li
		className={`todo-item ${props.completed ? "completed" : ""}`}
		onClick={() => props.onToggle(props.id)}>
		{props.text}</li>
}

export default function App() {
	const [todos, setTodos] = useState(() => {
		const loadTodos = JSON.parse(localStorage.getItem("todos") || "[]");
		return loadTodos;
	});
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		console.log("state changed")
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleAdd(event) {
		console.log("button clicked")
		setTodos([...todos,
		{
			id: crypto.randomUUID(),
			text: inputValue,
			completed: false
		}
		]);
		setInputValue("");
	}
	function handleToggle(id) {
		console.log("toggle", id);

		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, completed: !todo.completed }
					: todo
			)
		);
	}

	return (
		<div>
			<ul>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						text={todo.text}
						completed={todo.completed}
						onToggle={handleToggle}
					/>
				))}
			</ul>
			<input value={inputValue} onChange={handleChange} />
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}