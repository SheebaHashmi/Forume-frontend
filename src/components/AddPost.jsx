import axiosWithAuth from "../utilis/axiosWithAuth";
import {useNavigate} from 'react-router-dom'
import Navbar from "./Navbar";

function AddPost(props){
    const {post, setPost} = props
    const username = window.localStorage.getItem('username')
    let navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth().post(`https://forume-backend.herokuapp.com/api/${username}/post`,post)
        .then(res => {
            navigate("/dashboard")
            setPost({})
        })
        .catch(err => console.log(err))

    }

    return (
        <div className="forum-container">
            <Navbar/>
            <div className="forum-content">
                <h1 className="text-center fw-bolder">Add new post</h1>
                <form className="container card col-11 my-5 p-4">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Title:</label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="post_title"
                                value={post.post_title}
                                onChange={handleChange}

                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 mb-2 offset-md-3">
                            <label className="form-label fw-bold">Post: </label>
                            <textarea
                                className="form-control"
                                type="text"
                                name="post_body"
                                value={post.post_body}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-3 offset-md-5 mt-3">
                                <button 
                                    className="btn btn-primary px-5 mb-3"
                                    type="submit" 
                                    onClick={handleSubmit}
                                >Add Post</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddPost;