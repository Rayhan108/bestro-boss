
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRecomends from "../ChefRecomends/ChefRecomends";
import Feature from "../Feature/Feature";
import PopularMenu from "../PopularMenu/PopularMenu";
import Services from "../Services/Services";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Category></Category>
           <Services></Services>
           <PopularMenu></PopularMenu>
           <ChefRecomends></ChefRecomends>
           <Feature></Feature>
        </div>
    );
};

export default Home;