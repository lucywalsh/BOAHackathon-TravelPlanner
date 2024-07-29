import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LoginForm from './components/LoginForm.js';
import CreateAccountForm from './components/CreateAccountForm.js';
import TravelPlanner from './components/TravelPlanner.js';

function App() {

  {/*const [message, setMessage] = useState("");
  *useEffect(() => {
    fetch("/hello").then(res => res.json()).then(data => {
      setMessage(data.message);
    });
  }, []);*/}

  return (
    <Container className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/createaccount" element={<CreateAccountForm />} />
            <Route path="/planner" element={<TravelPlanner />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
