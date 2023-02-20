import Header from "../../components/widgets/header";
import { WeekTabs } from "../../components/widgets/weekDashboard";


const Dashboard: React.FC = () => {
    return (
        <div>
            <Header/>
            <WeekTabs/>
        </div>
    )
}

export default Dashboard;