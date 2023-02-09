import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import BannerHomepage from "../components/Banner";
import OffersComponent from "../components/OffersHome";
import FeaturedComponent from "../components/FeaturedComponent";

import { getAllRestaurants } from "../services/productServices";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../features/restaurants/restaurantSlice";

export default function Home() {
  const dispatch = useDispatch();
  const [featured, setFeatured] = useState([]);
  const [dineout, setDineout] = useState([]);

  useEffect(() => {
    getAllRestaurants().then((res) => {
      if (res.status === 200) {
        const featuredRes = [];
        const dineoutRes = [];
        res.data.map((item) => {
          if (item.isFeatured === true) {
            featuredRes.push(item);
          }
          if (item.isDineoutPay === true) {
            dineoutRes.push(item);
          }
        });
        setFeatured(featuredRes);
        setDineout(dineoutRes);
      } else {
        console.log("error getting dataa");
      }
    });
  }, []);
  dispatch(addRestaurant(dineout));

  return (
    <>
      <BannerHomepage />

      <div>
        <OffersComponent />
      </div>

      <div className="container mt-3">
        <h4>Featured Restaurants</h4>
        <FeaturedComponent featured={featured.slice(0, 3)} />
      </div>
    </>
  );
}
