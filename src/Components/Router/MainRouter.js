import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from '../Main';
import UserInfo from '../UserInfo';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const MainRouter = () => {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/home" component={Main} />
                    <Route path='/profile' component={UserInfo} />
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}