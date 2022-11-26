import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import HomeLoggedOut from "../../components/HomePage/HomeLoggedOut";
import HomeLoggedIn from "../../components/HomePage/HomeLoggedIn";

const HomePage = () => {
  const [user, token] = useAuth();

  return <div>{!user ? <HomeLoggedOut /> : <HomeLoggedIn />}</div>;
};

export default HomePage;
