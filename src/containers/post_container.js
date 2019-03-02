import React,{ Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {postDetail} from '../actions';
import {bindActionCreators} from 'redux';
import styled from 'styled-components';
import moment from 'moment';

class PostContainer extends Component {


    componentWillMount() {

        this.props.postDetail(this.props.match.params.id)
        console.log(`${this.props.match.params.id}`)
    }

    postTemplate = (data)=>(
        data ?
            <div>
            {console.log(data)}
                <div>
                    <Link to="/">
                        Back home
                    </Link>
                    <Link to={`/update/${data[0].id}`}>
                            <div>
                                <p>{`update ${data[0].title}`}</p>
                            </div>
                        </Link>
                </div>
                <div>
                    <p>{data[0].title}</p>
                    <p>{data[0].body}</p>
                    <p>{moment(parseInt(data[0].date)).format()}</p>
                    {/* <p>{moment(parseInt(item.date)).format()}</p> */}
                </div>
            </div>

            : null
    )

    render(){
        const Wrapper = styled.section`
        padding: 2em;
        background: papayawhip;
        margin: 1em;
    `;        

        console.log(this.props.posts)

        return (
            <div>
                <Wrapper>
                    {this.postTemplate(this.props.posts.postListDetail)}
                </Wrapper>
            </div>
        )
    }
};

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({postDetail},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);

