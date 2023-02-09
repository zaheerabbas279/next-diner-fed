import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/RestaurantDetails.module.css";
import { getRestaurantDataById } from "../services/productServices";
export default function RestaurantDetails() {
  const router = useRouter();
  const id = router.query.id;
  const [resData, setResData] = useState("");
  // console.log("🚀 ~ file: [...id].js:5 ~ RestaurantDetails ~ id", id);

  useEffect(() => {
    getRestaurantDataById(id).then((response) => {
      if (response.status === 200) {
        setResData(response.data);
        console.log("the restaurant data is", response.data);
      } else {
        console.log("error getting the data", response);
      }
    });
  }, []);
  return (
    <>
      <div className="container mt-4">
        <div className={`row align-items-center ${styles.res_container}`}>
          <div className="col-md-8">
            <div className={`${styles.imageContainer}`}>
              <img src={resData.image} alt="" className={`${styles.res_img}`} />
            </div>
            <div className={`${styles.res_details} mt-2`}>
              <div className={`card p-3 ${styles.res_card}`}>
                <h4>{resData.name}</h4>
                <p>
                  {resData.cost} for 1 | {resData.category}
                </p>
                <p>{resData.address}</p>
              </div>
            </div>

            <div className={`${styles.addReview} mt-2`}>
              <div className="card p-3">
                <div className="d-flex align-items-center justify-content-between my-3">
                  <h4>Reviews</h4>
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Review
                  </button>
                </div>

                <div className="card p-3">
                  <h6>Username</h6>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Nisi, voluptatibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add review modal */}
      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Add Review
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <label htmlFor="">Write your review below</label>
              <input
                type="text"
                name=""
                id=""
                className="input_tag"
                placeholder="Enter here..."
              />
              <label htmlFor="">Your name</label>
              <input
                type="text"
                name=""
                id=""
                className="input_tag"
                placeholder="Enter your name"
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
