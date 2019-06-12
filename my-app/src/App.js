import React , { Component } from 'react'
import RedditPost from './RedditPost'
import redditPosts from './data/redditPosts'

//This can be written here or inline into the App class, but with { around it }
// const redditPostsJsx = redditPosts.map(redditPosts => {
//     return <RedditPost 
//         key={ redditPosts.title }
//         title={ redditPosts.title }
//         comments={ redditPosts.comments }
//         submitted={ redditPosts.submitted } />
// })

console.log(redditPosts);

class App extends Component{
    render(){
        return ( 
            <div className="App">
                {
                    //Maps redditPosts using itself to return an object which MUST have a key, then everything else instatiated.
                    redditPosts.map(redditPost => {
                    return <RedditPost 
                        key={ redditPost.title }
                        title={ redditPost.title }
                        comments={ redditPost.comments }
                        submitted={ redditPost.submitted } />
                    })
                }
            </div>
        );
    }
}


export default App


//ISSUE, not rendering all from redditPosts.js