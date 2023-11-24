import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import About from "./About/About";
import Testimonials from "../Testimonials/Testimonials";
import Blog from "../Blog/Blog";
import Newsletter from "../Newsletter/Newsletter";
import Teams from "../Teams/Teams";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Home</title>
            </Helmet>
            <Banner></Banner>
            <Featured></Featured>
            <About></About>
            <Testimonials></Testimonials>
            <Blog></Blog>
            <Newsletter></Newsletter>
            <Teams></Teams>
        </div>
    );
};

export default Home;