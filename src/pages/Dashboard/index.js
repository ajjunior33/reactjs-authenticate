import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/NavBar";
const Dashboard = () => {
  return (
    <>
      <Sidebar />

      <main className="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg ">
        <Navbar />
      </main>
    </>
  );
};

export default Dashboard;
