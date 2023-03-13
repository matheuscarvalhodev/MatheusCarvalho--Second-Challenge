import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/forms/formLogin';
import SignupForm from './components/forms/formNewUser';
import Dashboard from './pages/dashboard/dashboard';
import Screen from './pages/screen/screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen title="Welcome," subtitle="Please, register to continue." typeScreen='newUser'><SignupForm/></Screen>} />
        <Route path="/login" element={<Screen title="Welcome," subtitle="To continue browsing safely, log in to the network." typeScreen='login'><Login/></Screen>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
