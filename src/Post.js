import React from 'react';
import"./post.css";
import{Avatar} from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavouriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";




function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar

}) {
    
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://iugwbm.com/wp-content/uploads/2018/07/drawing-1.png "/>

            </div>
            <div className="post__body">
            <div className="post__header">
            <div className="post__headerText">
                <h3>
                    Tanya {" "}
                    <span> 
                    <VerifiedUserIcon className="post__badge"/>
                    </span>
                </h3>
            </div>
            <div className="post__headerDescription">
                <p>
                    Are you sure? 
                </p>
                </div>
                
                <img className="post_image" src="https://media.wired.com/photos/59326d5344db296121d6aee9/master/pass/8552.gif" 
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
}

export default Post
