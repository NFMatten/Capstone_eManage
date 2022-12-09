import React from "react";
import useAuth from "../../hooks/useAuth";
import HomeLoggedOut from "../../components/HomePage/HomeLoggedOut";
import HomeLoggedIn from "../../components/HomePage/HomeLoggedIn";

const HomePage = () => {
  const [user] = useAuth();

  return <div>{!user ? <HomeLoggedOut /> : <HomeLoggedIn />}</div>;
};

export default HomePage;
