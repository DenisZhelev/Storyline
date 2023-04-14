import { useParams } from "react-router-dom";
import * as storyService from "../../services/storyService.js" 
import { useEffect, useState } from "react";
import * as  commentService from "../../services/commentService.js"

export const StoryDetails = () => {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);
    const { storyId } = useParams()
    const [story, setStory] = useState({});
    useEffect(() => {
        storyService.getOne(storyId)
        .then(result => {
            setStory(result);
            // return commentService.getAll(storyId);
        })
        // .then(result =>{
        //     setComments(result);
        // });
    },[storyId])
    const onCommentSubmit = async(e) => 
    {
        e.preventDefault();
        // await commentService.create({storyId, username,comment,});
        const result = await storyService.addComment(storyId,{ username,comment,})
        setStory(state => ({...state, comments: {...state.comments,[result._id]:result}}));
        setUsername("");
        setComment("");
    }

    return (
        <div>
          <h1>Details</h1>
          <form onSubmit={onCommentSubmit}>
            <input type = "txt" name = "username" placeholder="Naka" value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <textarea name="comment" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
            <input type="submit" value = "add comment"></input>
            <ul>
                {story.comments && Object.values(story.comments)?.map(x=> (
                    <li key ={x._id }>
                        <p>{x.username}: {x.comment}</p>
                    </li>
                ))}
                {/* {!Object.values(story.comments)?.length === 0 && (<p>No coments</p>)} */}
            </ul>
          </form>
        </div>
    );    
}