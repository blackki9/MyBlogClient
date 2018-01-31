import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AddPostPage from '../components/AddPostPage';
import BlogListPage from '../components/BlogListPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={BlogListPage} exact={true} />
                <Route path="/add" component={AddPostPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;