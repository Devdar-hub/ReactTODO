import React, {useState} from 'react';

const TodoEditModal = ({todo, onSaveEdit, onCancelEdit}) => {
    const [editedTodo, setEditedTodo] = useState(todo);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setEditedTodo({
            ...editedTodo,
            [name]: value,
        });
    };

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onCancelEdit}>&times;</span>
                <h2>Edit Task</h2>
                <form>
                    <label>Title:</label>
                    <input type="text" name="title" value={editedTodo.title} onChange={handleChange}/>

                    <label>Description:</label>
                    <input type="text" name="description" value={editedTodo.description} onChange={handleChange}/>

                    <label>Due Date:</label>
                    <input type="date" name="dueDate" value={editedTodo.dueDate} onChange={handleChange}/>

                    <label>Priority:</label>
                    <input type="text" name="priority" value={editedTodo.priority} onChange={handleChange}/>

                    <label>Status:</label>
                    <input type="text" name="status" value={editedTodo.status} onChange={handleChange}/>

                    <button type="button" onClick={onSaveEdit}>Save</button>
                    <button type="button" onClick={onCancelEdit}>Cancel</button>
                </form>
            </div>
        </div>
    );
};

export default TodoEditModal;
