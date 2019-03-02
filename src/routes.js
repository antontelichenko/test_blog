import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import CreatePost from './components/create_post';
import UpdatePost from './components/update_post';
import Post from './components/posts_list';
import Layout from './containers/layout';

const Routes = () => {
        return(
            <Layout>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/create" exact component={CreatePost}/>
                    <Route path="/posts/:id" exact component={Post}/>
                    <Route path="/update/:id" exact component={UpdatePost}/>
                </Switch>
            </Layout>
        )
}

export default Routes;