import React from 'react';
import "./TweetBox.css";
import{Avatar,Button} from "@material-ui/core";


function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://iugwbm.com/wp-content/uploads/2018/07/drawing-1.png "/>
                    <input placeholder= "Whats Happening? " type= "text"></input>
                    
                    <input 
                    className="tweetBox__imageInput"
                    placeholder= "optional: Enter image URL" 
                    type= "text"/>
                    
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
            
        </div>
    )
}

export default TweetBox

// add ability to post ie post tweets through post  component 

