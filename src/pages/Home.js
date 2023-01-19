import Catalogue from "../sections/Catalogue";
import Profile from "../sections/Profile";

function Home() {
    return (
        <div className="Home">
            <Profile />
            <Catalogue />
        </div>
    );
}

export default Home;
