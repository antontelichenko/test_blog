import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import moment from 'moment';

const Artistlist = (props) =>{
    console.log(props);
    const Wrapper = styled.section`
        padding: 2em;
        background: papayawhip;
        margin: 1em;
    `;
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
            {props.posts && props.posts.length > 0 ?
                props.posts.map( item => (
                    <Wrapper key={item.id}>
                        <Link to={`/posts/${item.id}`}>
                            <div>
                                <p>{item.title}</p>
                            </div>
                        </Link>

                                <p>{moment(parseInt(item.date)).format()}</p>

                        {/* //<Button onClick={()=>{props.deletePost(item.id)}}>DELETE</Button> */}
                        
                    </Wrapper>
                )) : null
            }
    
        </div>
    )
}

export default Artistlist;