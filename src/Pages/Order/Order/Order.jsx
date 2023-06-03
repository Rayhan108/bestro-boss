import { useState } from "react";
import orderCover from "../../../assets/shop/order.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
const catagories = ['salad','pizza','soup','dessert','drinks'];
    const {category}=useParams()
    const initialIndex =catagories.indexOf(category)
    console.log(initialIndex);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [data] = useMenu();


  const desserts = data.filter((item) => item.category === "dessert");
  const soup = data.filter((item) => item.category === "soup");
  const salad = data.filter((item) => item.category === "salad");
  const pizza = data.filter((item) => item.category === "pizza");
  const drinks = data.filter((item) => item.category === "drinks");
  return (
    <div>
                  <Helmet>
        <title>Bestro Boss | Order Food</title>
        
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
     <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
