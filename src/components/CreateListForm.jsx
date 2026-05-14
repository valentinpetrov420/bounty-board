import { useState } from "react"

export default function CreateListForm(props){
    const [title, setTitle] = useState("");

    function handleSubmit(event){
        event.preventDefault();

        props.onCreateList(title);

        setTitle("")
    }

    return <form onSubmit={handleSubmit}>
        <input value={title}
        onChange={(event) => {setTitle(event.target.value)}}
        placeholder="Enter List Name"></input>
        <button type="submit">Create New List</button>
    </form>
}