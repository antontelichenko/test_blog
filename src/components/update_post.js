import React, { PureComponent } from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux';
import {updatePost, deletePost, postDetail } from '../actions';
import {bindActionCreators} from 'redux';

import { withRouter } from 'react-router';
class AddPost extends PureComponent {

    state={
        
        id:this.props.match.params.id,
        checkPost:false,
        formdata:{
            id:this.props.match.params.id,
            body:'',
            title:''
        }
    }



    componentWillMount(){
        this.props.postDetail(this.props.match.params.id)
    }

    componentWillReceiveProps(nextProps){
        let post=nextProps.posts.postListDetail;
        console.log(post);
        this.setState({
            formdata:{
                title:post[0].title,
                body:post[0].body
            }
        })
    }

    handleInput=(e,name)=>{
        const newFormdata={
            ...this.state.formdata
        }
        newFormdata[name]=e.target.value

        this.setState({
            formdata:newFormdata
        })
    }

    deletePost=()=>{
        this.props.deletePost(this.props.match.params.id);
        this.setState({
            ...this.state,
            checkPost:true
        })
    }

    submitForm=(e)=>{
        e.preventDefault();
        console.log(this.state);
        this.props.updatePost(this.state.id, this.state.formdata.title, this.state.formdata.body, Date.now().toString());
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
      console.log(this.props)
        return (
            <div>
                <div>
                    <h2>{`Edit post`}</h2>
                    <form  onSubmit={this.submitForm}>

                    <input value={this.state.formdata.title||''}
                            onChange={(e)=>this.handleInput(e, 'title')}
                             type="text"/>
                    <input value={this.state.formdata.body||''}
                            onChange={(e)=>this.handleInput(e, 'body')}
                             type="text" />
                    
                    <Button type='submit'>Edit Post</Button>
                    </form>
                    {this.state.checkPost ?
                    <div>pls check 'all posts'</div>: null} 
                    <Button onClick={this.deletePost}>Delete Post</Button>
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
    return bindActionCreators({ updatePost, deletePost, postDetail},dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPost));