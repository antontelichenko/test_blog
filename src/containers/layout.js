import React, { Component } from 'react';
import {Link} from 'react-router-dom'
export default class Layout extends Component {
    render() {
        return (
            <div>
                
                <Link to={'/create'}>
                    {'create'}
                </Link><br/>
                <Link to={'/'}>
                    {' all posts'}
                </Link>
                <div className="page_container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
