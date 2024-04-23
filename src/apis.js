// src/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000';

export const apiLogin = async (credentials) => {
    try {
        const response = await axios.post(`${BASE_URL}/users/login`, credentials);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to login');
    }
};

export const apiTodoCreate = async (todoData) => {
    try {
        const response = await axios.post(`${BASE_URL}/todo/create`, todoData);
        console.log('Response from BE on TODO Creation:', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to create todo');
    }
};


export const apiTodoFetch = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/todo/fetch`);
        console.log('Response from BE on TODO FETCH:', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch todos');
    }
};

export const apiTodoEdit = async (payload) => {
    try {
        const response = await axios.patch(`${BASE_URL}/todo/update/${payload?._id}`, payload);
        console.log('Response from BE on TODO EDIT:', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to fetch todos');
    }
};


export const apiTodoDelete = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/todo/delete/${id}`);
        console.log('Response from BE on TODO Delete:', response.data);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || 'Failed to delete todo');
    }
};