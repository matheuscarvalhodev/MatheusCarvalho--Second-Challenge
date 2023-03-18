import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/forms/formLogin';
import SignupForm from './components/forms/formNewUser';
import Dashboard from './pages/dashboard';  
import ErroPage from './pages/erro';
import Screen from './pages/screen';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/new-user" element={
        <Screen title="Welcome," subtitle="Please, register to continue." typeScreen='newUser'>
          <SignupForm/>
        </Screen>} />
        <Route path="/login" element={
        <Screen title="Welcome," subtitle="To continue browsing safely, log in to the network." typeScreen='login'>
          <Login/>
        </Screen>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<Navigate to="/new-user"/>} />
        <Route path="*" element={<ErroPage message="Page not found." rota="/" button="Back to home"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
