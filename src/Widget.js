import React from 'react';
import "./Widget.css";
import {TwitterTimelineEmbed,
    TwitterTweetEmbed,TwitterShareButton} from "react-twitter-embed";
import { Timeline } from 'react-twitter-widgets';

function Widget() {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <searchIcon className="widgets_searchIcon"/>
                <input placeholder="search Twitter" type="text"/>
            </div>
            <div className="widgets__widgetContainer">
                

                <Timeline
                dataSource={{
                    sourceType: 'profile',
                    screenName: 'TwitterDev'
                }}
                options={{
                    height: '800'
                }}
                />

                <TwitterTweetEmbed tweetId={"511181794914627584"}/>

                

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="tanya"
                    options={{height:400}}
                    />

                <TwitterShareButton
                url={"https://www.facebook.com/tanya.a.prabhakar"}
                options={{ text: "#reactjs is awesome", via: "tanya" }}
                />

                <a 
                href="https://twitter.com/intent/tweet?button_hashtag=LoveTwitter&ref_src=twsrc%5Etfw" 
                class="twitter-hashtag-button" 
                data-show-count="false">
                    Tweet #LoveTwitter
                    </a>
                <script 
                async src="https://platform.twitter.com/widgets.js" 
                charset="utf-8">  
                </script>
            </div>
        </div>
    )
}

export default Widget
