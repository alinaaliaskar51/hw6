import CommentDate from "./CommentDate"
import UserInfo from "./UserInfo"



function Comment (props) {
    return (
        <div className="Comment">
        <UserInfo author={props.author} />
         <div className="Comment-text">{props.text}</div>
         <CommentDate date={props.date}/>
       </div>
   
    )
}

export default Comment