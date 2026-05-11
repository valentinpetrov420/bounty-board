import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function TodoItem(props) {
	return <li>{props.text}</li>;
}

export default function App() {
	const [todos, setTodos] = useState(() => {
		const loadTodos = JSON.parse(localStorage.getItem("todos"));
		if (loadTodos !== null) {
			return loadTodos;
		} else {
			return [];
		}
	});
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		console.log("state changed")
		localStorage.setItem("todos", JSON.stringify(todos));
	})

	function handleChange(event) {
		setInputValue(event.target.value);
	}

	function handleAdd(event) {
		console.log("button clicked")
		setTodos([...todos, inputValue]);
		setInputValue("");
	}

	const todosStatic = [
		{
			id: 1,
			text: "Buy milk",
			completed: true
		},
		{
			id: 2,
			text: "Walk dog",
			completed: true
		},
		{
			id: 3,
			text: "Learn React",
			completed: false
		},
	];

	return (
		<div>
			<ul>
				{todos.map(todo => (
					<TodoItem text={todo} />
				))}
			</ul>
			<input value={inputValue} onChange={handleChange} />
			<button onClick={handleAdd}>Add</button>
		</div>
	);
}