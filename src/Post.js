import React,{forwardRef} from 'react';
import"./post.css";
import{Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";




const Post = forwardRef(({
    displayName,
    username,
    verified,
    text,
    image,
    avatar

} ,ref)=> {
    
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar}/>

            </div>
            <div className="post__body">
            <div className="post__header">
            <div className="post__headerText">
                <h3>
                    {displayName}{" "}
                    <span> 
                    {verified && <VerifiedUserIcon className="post__badge"/>}
                    {username}
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>
                    {text} 
                </p>
                </div>
                
                <img className="post_image" src={image} 
                alt=""/>
                
            <div className="post__footer">
                <ChatBubbleIcon fontSize="small"/>
                <RepeatIcon fontSize="small"/>
                <FavouriteBorderIcon fontSize="small"/>
                <PublishIcon fontSize="small"/>
            </div>

            </div>

            
            </div>
        </div>
    )
})

export default Post
