import axiosWithAuth from "../utilis/axiosWithAuth";
import {useNavigate} from 'react-router-dom'

function Post(props) {
    const {post,setPosts,author} = props
    const navigate = useNavigate()
    
    const handleRemove= () => {
        axiosWithAuth()
        .delete(`https://forume-backend.herokuapp.com/api/${author}/post/${post.post_id}`)
        .then(res => navigate('/private/dashboard'))
    }
    

    return (
        <div className="card my-4 mx-2 px-4 gap-3">
            <div className="card-body">

                <h2 className="fw-bold">{post.post_title}</h2>
                <p>{post.post_body} </p>
                <hr />
                <div className="row">
                <div className="col">
                <p >Posted by {author}</p>
                <span className="float-end mx-2" onClick={()=>navigate("/private/addPost")}>Edit</span>
                <span className="float-end" onClick={handleRemove}>Remove</span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Post;