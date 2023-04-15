import Chart from '../componenet/Charts';
import FeaturedInfo from '../componenet/FeaturedInfo'
import '../css/pages/home.css'
import { userData } from "../dummyData";
import WidgetSm from '../componenet/WidgetSm';
import WidgetLg from '../componenet/WidgetLg';
function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  );
}
export default Home;