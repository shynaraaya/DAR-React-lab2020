import React, {useState} from 'react';
import './App.css';
import { Hello } from './components/hello/hello';
import { Avatar } from './components/profile/photo';

function App() {

    const file = '/me.jpg';

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
              {/* Image appears after name onClick
          { name ? <Avatar avatar={file} />: null}
              */}
          { name==='Shynar' ? <Avatar avatar={file} />: null}
          </div>

        <button className="App-login-btn" onClick={btnClickLoginHandler}>Log In</button>
          <button className="App-login-btn" onClick={btnClickNameHandler}>Change Name</button>
      </div>
    </div>
  );
}

export default App;
