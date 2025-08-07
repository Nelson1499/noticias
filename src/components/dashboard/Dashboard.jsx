import DashboardCard from "./DashboardCard";
import DashboardCardbig from "./DashboardCardbig";
import Dashboardcardsmall from "./Dashboardcardsmall";

const Dashboard = () => {
  const array = [1, 2];
  const arraysmall = [1, 2, 3];
  return (
    <>
      <section className="flex w-full">
        <div className="grow-3">
          {array.map((i) => (
            <DashboardCard key={i} />
          ))}
        </div>
        <div className="grow-7">
          <DashboardCardbig />
        </div>
        <div className="grow-1">
          {arraysmall.map((i) => (
            <Dashboardcardsmall key={i} />
          ))}
        </div>
      </section>
      <hr className="border-2"/>
      <section>
        <h1 className="text-center">Lo mejor de la semana!!!</h1>
        <div className="flex">
          {array.map((i) => (
            <DashboardCardbig key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Dashboard;


