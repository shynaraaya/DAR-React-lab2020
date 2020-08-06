import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Posts } from './pages/posts/Posts';
import { PostDetail } from './pages/postdetail/PostDetail';
import { Chat } from './pages/chat/Chat';
import YouTube from 'react-youtube'
import { Room } from './pages/room/Room';
import { UserInfo } from './types/interfaces';
import { UserContext } from './services/context';
import { Videos } from './pages/videos/Videos';


function App() {

    const [user, setUser] = useState<UserInfo | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            <Router>
                <div className="App">
                    <nav className="App-navigation">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/posts">Posts</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className="App-content">
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route exact path="/posts">
                                <Posts />
                            </Route>
                            <Route path="/room/:id">
                                <Room />
                            </Route>
                            <Route path="/videos">
                                <Videos />
                            </Route>
                            <Route path="/posts/:id" render={ routeProps => <PostDetail id={ routeProps.match.params.id } /> } />
                            <Route path="*">
                                <h2>Not found</h2>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        </UserContext.Provider>
    );
}

export default App;
