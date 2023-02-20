import Dashboard from './pages/dashboard/dashboard';
import LoginScreen from './pages/login/login';
import NewUserScreen from './pages/newUser/newUser';

function App() {
  return (
    <div>
      <LoginScreen/>
      <NewUserScreen/>
      <Dashboard/>
    </div>
  );
}

export default App;
