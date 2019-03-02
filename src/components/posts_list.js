import React from 'react';

import PostContainer from '../containers/post_container';

const Post = (props) =>{
    console.log(props);
    return(
        <PostContainer {...props} />
    )
}

export default Post;