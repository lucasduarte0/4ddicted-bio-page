import AxiosRequest from "../components/AxiosRequest";
import Footer from "../sections/Footer";
import Profile from "../sections/Profile";

function Home() {
  return (
    <div className="Home">
      <main className="py-10">
        <Profile />
        <AxiosRequest />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
