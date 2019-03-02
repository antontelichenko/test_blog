import React, { Component } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import { postsAll,addPost } from '../actions';
import {bindActionCreators} from 'redux';

import {withRouter } from 'react-router';
class AddPost extends Component {

    state={
        title:'',
        body:'',
        checkPost:false
    }

    getKeywords = (event) => {
        console.log(event.currentTarget.id);
        if(event.currentTarget.id=='title'){
            this.setState({
                ...this.state,
                title:event.target.value
            })
        }
        else{
            this.setState({
                ...this.state,
                body:event.target.value
            })
        }
        console.log(this.state);
    }

    addPost=()=>{
        console.log(this.state);
        this.props.addPost(this.state.title, this.state.body, Date.now().toString());
        this.setState({
            ...this.state,
            checkPost:true
        })
    }

    render() {
        const Button = styled.button`
        display: inline-block;
        color: palevioletred;
        font-size: 1em;
        margin: 1em;
        padding: 0.25em 1em;
        border: 2px solid palevioletred;
        border-radius: 3px;
        display: block;
      `;
        return (
            <div>
                <div>
                    <h2>{`add post`}</h2>
                    <input type="text" id='title' onChange={event => this.getKeywords(event)}/>
                    <input type="text" id='body' onChange={event => this.getKeywords(event)}/>
                    {this.state.checkPost ?
                    <div>pls check 'all posts'</div>: null} 
                    <Button onClick={this.addPost}>Add Post</Button>
                </div>
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
    return bindActionCreators({postsAll, addPost},dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));