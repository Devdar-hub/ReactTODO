import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {todoCreateRequest} from '../actions/todoActions';
import {useNavigate} from "react-router-dom";


const CreateTask = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useHistory

    const {loading, error} = useSelector((state) => state.todo); // Assuming you have a todo reducer

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        dueDate: '',
        priority: 'HIGH',
        status: 'TODO'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dispatch action to create task
        dispatch(todoCreateRequest(formData));
        navigate('/todo-home');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>

            <div className="mb-3">
                <label htmlFor="dueDate" className="form-label">Due Date</label>
                <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="mb-3">
                <label htmlFor="priority" className="form-label">Priority</label>
                <select
                    className="form-select"
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value="HIGH">High</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="LOW">Low</option>
                </select>
            </div>

            <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <select
                    className="form-select"
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="TODO">Todo</option>
                    <option value="IN-PROGRESS">In Progress</option>
                    <option value="REVIEW">Review</option>
                    <option value="DONE">Done</option>
                </select>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default CreateTask;
