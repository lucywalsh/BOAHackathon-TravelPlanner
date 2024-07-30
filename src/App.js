import User from './contexts/User.js'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import LoginForm from './components/LoginForm.js';
import CreateAccountForm from './components/CreateAccountForm.js';
import TravelPlanner from './components/TravelPlanner.js';

function App() {

  return (
    
    <Container className="App">
        <BrowserRouter>
          <User>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/createaccount" element={<CreateAccountForm />} />
              <Route path="/planner" element={<TravelPlanner />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </User>
      </BrowserRouter>
    </Container>
  );
}

export default App;
