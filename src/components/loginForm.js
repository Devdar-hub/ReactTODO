// src/components/LoginPage.js

import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../actions/authActions';
import {useFormik} from 'formik';
import {useNavigate} from "react-router-dom";

const LoginPage = ({loginRequest, loading, error, isAuthenticated}) => {
    const navigate = useNavigate(); // Initialize useHistory
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        // validationSchema,
        onSubmit: (values) => {
            loginRequest(values);
        },
    });

    useEffect(() => {
        if (isAuthenticated) {
            // redirectTo('/todo-home');
            navigate('/todo-home'); // Redirect using navigate
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="container mt-5">
            <h2 className="mb-4">User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`form-control ${formik.errors.email && formik.touched.email && 'is-invalid'}`}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <div className="invalid-feedback">{formik.errors.email}</div>
                    )}
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className={`form-control ${formik.errors.password && formik.touched.password && 'is-invalid'}`}
                    />
                </div>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                {error && <p className="text-danger mt-2">{error}</p>}
            </form>
        </div>
    );
};

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.isAuthenticated,
});

const mapDispatchToProps = {
    loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
