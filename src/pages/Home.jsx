import AxiosRequest from "../components/AxiosRequest";
import Catalogue from "../sections/Catalogue";
import Profile from "../sections/Profile";

function Home() {
    return (
        <div className="Home">
            <Profile />
            {/* <Catalogue /> */}
            <AxiosRequest />
        </div>
    );
}

export default Home;
