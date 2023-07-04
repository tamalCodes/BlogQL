import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Landing = () => {
  const [posts, setPosts] = useState([]);

  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  return (
    <>
      <Navbar />
      Landing
    </>
  );
};

export default Landing;
