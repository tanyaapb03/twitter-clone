import React ,{useState}from 'react';
import "./TweetBox.css";
import{Avatar,Button} from "@material-ui/core";
import db from "./firebase";


function TweetBox() {
    // setMessage and SetTweetMessage  to input the values
    const[tweetMessage,setTweetMessage]= useState(" ");

    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) =>{
        e.preventDefault();
        db.collection('posts').add({
            displayName:'tanya',
            username:'tani',
            verified:true,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://www.kindpng.com/picc/m/129-1291730_cartoon-cute-avatar-girl-hd-png-download.png"
        });

        setTweetMessage("");
    setTweetImage("");
  };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://iugwbm.com/wp-content/uploads/2018/07/drawing-1.png "/>
                    <input 
                    onChange={(e)=>setTweetMessage(e.target.value)}
                    value={tweetMessage}
                    placeholder= "Whats Happening? " 
                    type= "text"

                    />
                    </div>
                    <input className="tweetBox__imageInput" 
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    placeholder="Optional: Enter image URL"
                    type="text"
                    
                />
                
                <Button  onClick={sendTweet} 
                type="submit" 
                className="tweetBox__tweetButton">Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox

// add ability to post ie post tweets through post  component 

