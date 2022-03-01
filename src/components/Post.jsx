import axiosWithAuth from "../utilis/axiosWithAuth";

function Post(props) {
    const {post,author} = props

    const handleRemove= (e) => {
        e.preventDefault()
        axiosWithAuth().delete(`https://forume-backend.herokuapp.com/${author}/post/${post.post_id}`)
        .then(res => console.log(res))
    }

    return (
        <div>
            <div className="card-body">

                <h2 className="fw-bold">{post.post_title}</h2>
                <p>{post.post_body} </p>
                <hr />
                <div className="row">
                <div className="col">
                <p >Posted by {author}</p>
                <span className="float-end mx-2" >Edit</span>
                <span className="float-end" onClick={handleRemove}>Remove</span>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Post;