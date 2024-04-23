import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {todoDeleteRequest, todoEditRequest, todoFetchRequest} from '../actions/todoActions';
import {FaTrash} from 'react-icons/fa';
import {Link} from "react-router-dom";

const TodoHomePage = () => {
    const dispatch = useDispatch();
    const {todos, loading, error} = useSelector((state) => state.fetchToDo);
    const [filters, setFilters] = useState({
        title: '',
        description: '',
        dueDateFrom: '',
        dueDateTo: '',
        priority: '',
        status: ''
    });
    const [sortConfig, setSortConfig] = useState({key: null, direction: 'ascending'});
    const [priorityOptions, setPriorityOptions] = useState([]);
    const [statusOptions, setStatusOptions] = useState([]);

    useEffect(() => {
        dispatch(todoFetchRequest());
    }, [dispatch]);

    // Update unique priority and status options when todos change
    useEffect(() => {
        if (todos.length > 0) {
            const uniquePriorities = [...new Set(todos.map((task) => task.priority))];
            const uniqueStatuses = [...new Set(todos.map((task) => task.status))];
            setPriorityOptions(uniquePriorities);
            setStatusOptions(uniqueStatuses);
        }
    }, [todos]);

    const handleEdit = (id, field, value) => {
        const updatedTodo = {
            _id: id,
            [field]: value
        };
        // Update todos state with edited field
        // Here you would typically dispatch an action to update the todos in Redux state
        dispatch(todoEditRequest(updatedTodo));

        window.location.reload();
    };

    const handleDoubleClick = (id, field, value) => {
        const newValue = prompt(`Enter new ${field}:`, value); // Use prompt for inline editing
        if (newValue !== null && newValue !== value) {
            const confirmEdit = window.confirm(`Confirm editing ${field} to '${newValue}'?`);
            if (confirmEdit) {
                handleEdit(id, field, newValue);
            }
        }
    };

    const handleDelete = (id) => {
        console.log(`Delete task with ID: ${id}`);
        dispatch(todoDeleteRequest(id)); // Dispatch delete action
    };

    const filteredAndSortedTodos = todos
        .filter((task) => {
            return (
                task.title.toLowerCase().includes(filters.title.toLowerCase()) &&
                task.description.toLowerCase().includes(filters.description.toLowerCase()) &&
                (filters.dueDateFrom === '' || task.dueDate >= filters.dueDateFrom) &&
                (filters.dueDateTo === '' || task.dueDate <= filters.dueDateTo) &&
                (filters.priority === '' || task.priority === filters.priority) &&
                (filters.status === '' || task.status === filters.status)
            );
        })
        .sort((a, b) => {
            if (sortConfig.key) {
                const aValue = a[sortConfig.key];
                const bValue = b[sortConfig.key];
                if (aValue < bValue) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
            }
            return 0;
        });

    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({key, direction});
    };

    const handleFilterChange = (e, filterKey) => {
        setFilters({...filters, [filterKey]: e.target.value});
    };

    return (
        <div>
            <h2>Task List</h2>
            <div className="d-flex justify-content-end mb-3">
                <Link to="/create" className="btn btn-primary">Create</Link>
            </div>
            <div className="filters">
                <input
                    type="text"
                    placeholder="Filter by Title"
                    value={filters.title}
                    onChange={(e) => handleFilterChange(e, 'title')}
                />
                <input
                    type="text"
                    placeholder="Filter by Description"
                    value={filters.description}
                    onChange={(e) => handleFilterChange(e, 'description')}
                />
                <input
                    type="date"
                    placeholder="From Due Date"
                    value={filters.dueDateFrom}
                    onChange={(e) => handleFilterChange(e, 'dueDateFrom')}
                />
                <input
                    type="date"
                    placeholder="To Due Date"
                    value={filters.dueDateTo}
                    onChange={(e) => handleFilterChange(e, 'dueDateTo')}
                />
                <select
                    value={filters.priority}
                    onChange={(e) => handleFilterChange(e, 'priority')}
                >
                    <option value="">Filter by Priority</option>
                    {priorityOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
                <select
                    value={filters.status}
                    onChange={(e) => handleFilterChange(e, 'status')}
                >
                    <option value="">Filter by Status</option>
                    {statusOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            {loading && <p>Loading tasks...</p>}
            {error && <p>Error: {error}</p>}
            {filteredAndSortedTodos.length > 0 ? (
                <table className="table">
                    <thead>
                    <tr>
                        <SortableColumnHeader
                            label="Title"
                            sortKey="title"
                            handleSort={handleSort}
                            sortConfig={sortConfig}
                        />
                        <SortableColumnHeader
                            label="Description"
                            sortKey="description"
                            handleSort={handleSort}
                            sortConfig={sortConfig}
                        />
                        <SortableColumnHeader
                            label="Due Date"
                            sortKey="dueDate"
                            handleSort={handleSort}
                            sortConfig={sortConfig}
                        />
                        <SortableColumnHeader
                            label="Priority"
                            sortKey="priority"
                            handleSort={handleSort}
                            sortConfig={sortConfig}
                        />
                        <SortableColumnHeader
                            label="Status"
                            sortKey="status"
                            handleSort={handleSort}
                            sortConfig={sortConfig}
                        />
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredAndSortedTodos.map((task) => (
                        <tr key={task._id}>
                            <td onDoubleClick={() => handleDoubleClick(task._id, 'title', task.title)}>
                                {task.title}
                            </td>
                            <td onDoubleClick={() => handleDoubleClick(task._id, 'description', task.description)}>
                                {task.description}
                            </td>
                            <td onDoubleClick={() => handleDoubleClick(task._id, 'dueDate', task.dueDate)}>
                                {task.dueDate}
                            </td>
                            <td onDoubleClick={() => handleDoubleClick(task._id, 'priority', task.priority)}>
                                {task.priority}
                            </td>
                            <td onDoubleClick={() => handleDoubleClick(task._id, 'status', task.status)}>
                                {task.status}
                            </td>
                            <td>
                                <button className="btn btn-sm btn-danger" onClick={() => handleDelete(task._id)}>
                                    <FaTrash/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>No tasks found.</p>
            )}
        </div>
    );
};

const SortableColumnHeader = ({label, sortKey, handleSort, sortConfig}) => {
    const getClassNamesFor = (name) => {
        if (!sortConfig.key) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
        <th onClick={() => handleSort(sortKey)} className={getClassNamesFor(sortKey)}>
            {label}
            {sortConfig.key === sortKey && (
                <span>{sortConfig.direction === 'ascending' ? ' 🔼' : ' 🔽'}</span>
            )}
        </th>
    );
};

export default TodoHomePage;
