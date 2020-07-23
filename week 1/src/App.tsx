import React, {useState} from 'react';
import './App.css';
import { Hello } from './components/hello/hello';
import './me.jpg';

function App() {

    const file = require('./me.jpg');

    const [clicked, setClicked] = useState<boolean>();

    const [name, setName] = useState<string>('');

    const [avatar, setAvatar] = useState('');

    const btnClickLoginHandler = () => {
        console.log("Button clicked");
        setClicked(true);
    };

    const btnClickNameHandler = () => {
        console.log("Button clicked");
        setName('Shynar');
        setAvatar(file);
    };

  return (
    <div className="App">
      <div className="App-wrapper">
          { clicked ? <Hello name={name} />: null}
          <div className="App-profile-photo">
          { clicked ? < img src={avatar} alt='' />: null}
          </div>

        <button className="App-login-btn" onClick={btnClickLoginHandler}>Log In</button>
          <button className="App-login-btn" onClick={btnClickNameHandler}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
