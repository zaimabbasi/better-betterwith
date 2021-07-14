import React from "react";
import Header from "./Header"


const Home = () => {

    const [flavors, setFlavors] = React.useState([]);
   
    React.useEffect( () => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const response = await fetch("http://localhost:5000");
        const items = await response.json();
        
        setFlavors(items);
    };
   
    return (
        <Header />
    );
}

export default Home;