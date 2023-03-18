import Header from "../../components/widgets/headerDashboardWidget";
import { WeekDashboard } from "../../components/widgets/weekDashboardWidget";
import Erro404 from "../erro";

const Dashboard: React.FC = () => {
    const userData = localStorage.getItem('user')
    const user = userData ? JSON.parse(userData) : null;
    if (!user) {
        return <Erro404 message="You are not logged in. Login to use the planner" rota="/login" button="Sign in"/>;
      } else {
        return (
          <div>
            <Header city={user.user.city} country={user.user.country}/>
            <WeekDashboard token={user.token}/>
          </div>
        );
      }

}

export default Dashboard;