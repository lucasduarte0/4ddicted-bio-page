import AxiosRequest from "../components/AxiosRequest";
import Footer from "../sections/Footer";
import Profile from "../sections/Profile";

function Home() {
    return (
        <div className="Home">
            <Profile />
            {/* <Catalogue /> */}
            <AxiosRequest />
            <Footer />
        </div>
    );
}

export default Home;
