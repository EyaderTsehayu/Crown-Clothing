import Dirctory from "../../components/directory/directory.componenet";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Outlet />
      <Dirctory />
    </div>
  );
};
export default Home;
