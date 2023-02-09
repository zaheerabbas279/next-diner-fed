import styles from "./DineoutPay.module.css";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export default function DineoutPayComponent() {
  const router = useRouter();
  const { user } = useUser();
  const restaurants = useSelector((state) => state.restaurant);

  const naviagteToDetails = (id) => {
    console.log("clicked");
    router.push(`/${id}`);
  };

  return (
    <>
      <div className={`${styles.dineoutPay_div}`}>
        <div className="container">
          <h3>Dineout Pay</h3>

          {!user && (
            <div>
              <h4>Please login to view the page...</h4>
              <Link href="/api/auth/login">Login</Link>
            </div>
          )}

          {user && (
            <>
              <div className={styles.restaurantList}>
                <div className="row">
                  {restaurants.map((item) => {
                    return (
                      <div
                        className="col-md-4"
                        key={item._id}
                        onClick={() => naviagteToDetails(item._id)}
                      >
                        <div
                          className={`card p-2 mt-2 ${styles.restaurant_img}`}
                        >
                          <div className="position-relative">
                            <img
                              src={item.image}
                              alt=""
                              className={styles.food_img}
                            />
                            <div
                              className={`position-absolute ${styles.ratings_div}`}
                            >
                              <h6 className="text-light">4.0</h6>
                            </div>
                          </div>
                          <h6>{item.name}</h6>
                          <p
                            className={`small text-secondary mb-0 ${styles.address}`}
                          >
                            {item.address}
                          </p>
                          <p className="small text-secondary mb-0">
                            {item.cost} per person
                          </p>
                          <p className="small text-secondary mb-0">
                            {item.category}
                          </p>
                          {/* <Link href={`/${item._id}`}>Book here</Link> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
