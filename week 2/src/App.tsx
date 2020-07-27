import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/Posts';
import { PostDetail } from './pages/postdetail/PostDetail';


function App() {

    return (
        <Router>
            <div className="App">
                <nav className="nav-menu">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
                <div className="content">
                    <Switch>
                        <Route exact path="/posts">
                            <Posts />
                        </Route>
                        <Route path="/posts/:id">
                            <PostDetail id={1}/>
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <h2>Not found</h2>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
