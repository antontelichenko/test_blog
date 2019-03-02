import React, { Component } from 'react';

import {connect} from 'react-redux';
import { postsAll, deletePost } from '../actions';
import {bindActionCreators} from 'redux';
import PostList from '../components/postlist';

class HomeContainer extends Component {

    componentWillMount() {
        this.props.postsAll();
    }

    // deletePost=(id)=>{
    //     // this.props.deletePost(id)
    //     console.log('id')
    // }

    render(){
            console.log(this.props)
          
        return (
            <div>
                {/* <PostList deletePost={this.props.deletePost} posts={this.props.posts.postList}/> */}
                <PostList posts={this.props.posts.postList}/>
            </div>
        )
    }

}

function mapStateToProps(state){
    return{
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postsAll, deletePost},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)