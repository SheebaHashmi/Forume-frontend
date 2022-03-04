import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosWithAuth from '../utilis/axiosWithAuth';
import Navbar from './Navbar';

function EditProfile(props) {
    const { formValues, setFormValues } = props
    let navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().put(`https://forume-backend.herokuapp.com/api/${formValues.username}/profile`, formValues)
            .then(res => {
                setFormValues(res.data)
                navigate('/profile')
            })
    }

    useEffect(() => {
        axiosWithAuth().get(`https://forume-backend.herokuapp.com/api/${formValues.username}/profile`)
            .then(res => {
                setFormValues(res.data)
            })
    }, [setFormValues, formValues.username])

    return (
        <div className="forum-container">
            <Navbar />
            <div className="forum-content">

                <h1 className="text-center fw-bolder">Edit Profile</h1>
                <form className="container card col-11 my-5 py-4">

                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Fullname:</label>
                            <input
                                type="text"
                                name="fullname"
                                className="form-control"
                                value={formValues.fullname}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Email:</label>
                            <input
                                type="text"
                                name="email"
                                className="form-control"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Username: </label>
                            <input
                                type="text"
                                name="username"
                                className="form-control"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Password: </label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5 mt-3">
                            <button
                                className="btn btn-primary px-5"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default EditProfile;