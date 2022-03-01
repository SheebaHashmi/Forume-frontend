import Post from './Post'

function Posts(props){
    return(
        <div className="card my-4 mx-2 px-4 gap-3" >
            <Post post={props.post} author={props.author}/> 
        </div>
    ) 
 }
 export default Posts;