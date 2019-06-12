import React from 'react'
import './RedditPost.css'



// Inline Styling
// const style1 = { backgroundColor: 'cyan', display: 'flex', flexDirection: 'column'}
// const style2 = { display: 'flex', flexDirection: 'row'}
// const style3 = { marginRight: 30}

export default (props) => {
    return <div className="redditPostContainer">
        <a href="https://google.com">{ props.title }</a><br />
        <div className="redditPostBottomContainer">
            <p className="comments">{ props.comments } Comments</p>
            <p className="submitComments">Submitted { props.submitted.fromNow()}</p>
        </div>

    </div>
}

// Study styled components
// Study CSS modules