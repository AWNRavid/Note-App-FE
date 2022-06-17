import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import NoteContainer from './Components/NoteContainer';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import AddNote from './Components/AddNote';
import LoginPage from './Components/LoginPage';
import Register from './Components/Register';
import MainPage from './Components/MainPage';
import About from './Components/About';
import { Route, Switch, useHistory } from 'react-router-dom';
import axios from './api/notes';

function App() {
  const [notes, setNotes] = useState([]);
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [whoLogin, setWhoLogin] = useState();
  const [isLogin, setIsLogin] = useState(false);
  // const [token, setToken] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    const newMembers = {
      username,
      password,
    };
    // const {username, password} = req.body;
    console.log(username, password);
    try {
      const response = await axios.post('/register', newMembers);
      console.log(response);
      if (response.data.isExist === true) {
        console.log('user already exist');
      } else {
        setUsername('');
        setPassword('');
        history.push('/login');
      }
    } catch (error) {
      console.log(`Error: ${error.message}`);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(username, password);
    try {
      const response = await axios.post('/login', { username, password });
      console.log(response.data);
      setUsername('');
      setPassword('');
      setWhoLogin(response.data.result.username);
      localStorage.setItem('token', response.data.accessToken);
      setIsLogin(true);
      localStorage.setItem('isLogin', isLogin);
      history.push('/note');
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleGetNote = async () => {
    // token dimasukkan dulu ke axios
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`/get-note/:id`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      setNotes(response.data.reverse());
    } catch (error) {
      console.log(`Error: ${error}`);
      localStorage.removeItem('token');
      history.push('/login');
    }
  };

  const handleAddNewNote = async (newNote) => {
    console.log(newNote);
    const { title, content } = newNote;
    console.log(title, content);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `/create-note/:userId`,
        { title, content },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      console.log(response);
      // setNotes([...notes, response.data]);
    } catch (error) {
      console.log(`Error: ${error}`);
      localStorage.removeItem('token');
      history.push('/login');
    }
  };

  const handleEditNote = async (newNote) => {
    console.log(newNote);
    const { id, title, content } = newNote;
    console.log(title, content);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(
        `/edit-note/:userId/:noteId`,
        { id, title, content },
        {
          headers: {
            Authorization: `token ${token}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.log(`Error: ${error}`);
      localStorage.removeItem('token');
      history.push('/login');
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/delete-note/${id}`, {
        headers: {
          Authorization: `token ${token}`,
        },
      });
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const handleLogout = () => {
    console.log('log out');
    history.push('/login');
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    setIsLogin(false);
  };

  // window.addEventListener("beforeunload", () => {
  //   localStorage.removeItem('isLogin')
  //   localStorage.removeItem('token')
  // });

  return (
    <div>
      <NavbarComp isLogin={isLogin} handleLogout={handleLogout} whoLogin={whoLogin} />
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/login">
          <LoginPage username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleLogin={handleLogin}/>
        </Route>
        <Route path="/register">
          <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword} handleRegister={handleRegister}/>
        </Route>
        <Route path="/note">
          <Container className="mt-5">
            <AddNote notes={notes} handleAddNewNote={handleAddNewNote} />
          </Container>
          <NoteContainer notes={notes} setNotes={setNotes} handleGetNote={handleGetNote} handleDelete={handleDelete} handleEditNote={handleEditNote} isLogin={isLogin} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
