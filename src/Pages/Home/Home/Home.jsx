import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";
import Testemonials from "../Testemonials/Testemonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bestro Boss| Home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Services></Services>
      <PopularMenu></PopularMenu>
      <ChefRecomends></ChefRecomends>
      <Feature></Feature>
      <Testemonials></Testemonials>
    </div>
  );
};

export default Home;
