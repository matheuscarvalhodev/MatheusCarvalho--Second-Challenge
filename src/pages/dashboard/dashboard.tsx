import { useLocation } from "react-router-dom";
import Header from "../../components/widgets/headerDashboardWidget";
import { WeekDashboard } from "../../components/widgets/weekDashboardWidget";


const Dashboard: React.FC = () => {
    const location = useLocation();
    const { id } = location.state;
    return (
        <div>
            <Header user={id}/>
            <WeekDashboard/>
        </div>
    )
}

export default Dashboard;