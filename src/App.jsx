import { useEffect, useState } from 'react'
import './App.css'
import TodoItem from './components/TodoItem';
import List from './components/List';


export default function App() {
	const [todos, setTodos] = useState(() => {
		const loadTodos = JSON.parse(localStorage.getItem("todos") || "[]");
		return loadTodos;
	});
	const [inputValue, setInputValue] = useState("");
	const [error, setError] = useState("");
	const maxLength = 50;

	useEffect(() => {
		console.log("state changed");
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos])

	useEffect(() => {
		console.log(error);
		localStorage.setItem("error", error);
	}, [error]);

	function handleChange(event) {
		const value = event.target.value;

		setInputValue(value);

		if (event.target.value.length > maxLength) {
			setError(`Item cannot be longer than ${maxLength} symbols.`)
		} else {
			setInputValue(event.target.value);
		}
	}

	function handleAdd(event) {
		event.preventDefault();

		console.log("button clicked")

		const trimmedInput = inputValue.trim();
		if (!trimmedInput) {
			setError('Text cannot be empty');
			localStorage.setItem("error", error), [error];
			return;
		}

		if (trimmedInput.length > maxLength) {
			setError(`Item cannot be longer than ${maxLength} symbols.`)
			localStorage.setItem("error", error), [error];
		} else {
			setTodos([...todos,
			{
				id: crypto.randomUUID(),
				text: inputValue,
				completed: false
			}
			]);
			setError('');
			setInputValue("");
		}
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
		<form onSubmit={handleAdd}>
			<List listItems={todos} onToggle={handleToggle}></List>
			<p id="form-error" role="alert">
				{error}
			</p>
			<input value={inputValue} onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	);
}