import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


function Homepage(props) {
    const { formValues, setUser, setFormValues } = props
    
    const [disabled, setDisabled] = useState(true)
    let navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
        setDisabled(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://forume-backend.herokuapp.com/api/auth/login', formValues)
            .then(res => {
                window.localStorage.setItem('token', res.data.token)
                window.localStorage.setItem('username',res.data.user.username)
                navigate("/private/dashboard")

            })

    }
    
    return (
        <div className="forum-container">
            <div className="forum-content">
                <h1 className="text-center fw-bolder">Welcome to Forume</h1>
                <form className="container card col-11 my-5 p-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Username:</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Password: </label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5 mt-3">

                            <button
                                className="btn btn-primary px-5 mb-3"
                                type="submit"
                                disabled={disabled}
                                onClick={handleSubmit}
                            >Login</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5">
                            <a className="text-decoration-none fw-bold" href="/register">Create new account</a>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Homepage;
