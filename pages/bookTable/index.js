import styles from "./BookTable.module.css";
import {
  getAllRestaurants,
  postNewRestaurant,
} from "../../services/productServices";
import { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import Resizer from "react-image-file-resizer";
export default function BookTableComponent() {
  const [restaurants, setRestaurants] = useState([]);
  const [restaurantdata, setRestaurantData] = useState({
    name: "",
    address: "",
    category: "",
    phone: "",
    cost: "",
    image: "",
    isFeatured: false,
    isDineoutPay: false,
  });

  const getRestaurantData = () => {
    getAllRestaurants()
      .then((response) => {
        if (response.status === 200) {
          setRestaurants(response.data);
        } else {
          console.log("errrrror");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  useEffect(() => {
    getRestaurantData();
  }, []);

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const handleImage = async (event) => {
    // const reader = new FileReader();
    const file = event.target.files[0];

    try {
      const image = await resizeFile(file);
      setRestaurantData({ ...restaurantdata, image: image });
      console.log(image);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFeatured = (event) => {
    setRestaurantData({ ...restaurantdata, isFeatured: event.target.checked });
  };
  const handleDineoutPay = (event) => {
    setRestaurantData({
      ...restaurantdata,
      isDineoutPay: event.target.checked,
    });
  };

  const addNewRestaurant = (e) => {
    e.preventDefault();
    console.log("restaurant data is", restaurantdata);
    postNewRestaurant(restaurantdata)
      .then((res) => {
        document.getElementById("restaurantForm").reset();
        document.getElementById("btnModalClose").click();
        getRestaurantData();
        console.log("res---->", res);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <>
      <div className={styles.book_table_div}>
        <div className="container pt-3">
          {/* <h4>Book a Table</h4> */}

          <div className="row">
            <div className="col-md-4 ">
              <p className="mb-0">
                <strong>Quick Filters</strong>
              </p>

              <div className={`p-2 ${styles.checkbox_div}`}>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Dineout Pay
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    5 star
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Pure Veg
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Buffet
                  </label>
                </div>
              </div>

              <div className="mt-2">
                <p className="mb-0">
                  <strong>Cuisines</strong>
                </p>

                <div className={`p-2 ${styles.checkbox_div}`}>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      North Indian
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      South Indian
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Chinese
                    </label>
                  </div>
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label class="form-check-label" for="flexCheckDefault">
                      Fast Food
                    </label>
                  </div>
                </div>

                <div className="mt-4 ">
                  <button
                    className="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    Add Restaurant
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <h2 className="mb-0">
                <strong>Restaurants</strong>
              </h2>
              <span>(899)</span>

              <div className={styles.restaurantList}>
                <div className="row">
                  {restaurants.map((item) => {
                    return (
                      <div className="col-md-4" key={item._id}>
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form id="restaurantForm" onSubmit={addNewRestaurant}>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Add Restaurant
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  id="btnModalClose"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className={`p-3 ${styles.addForm}`}>
                  <label htmlFor="">Restaurant Name</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter restaurant name"
                    onChange={(e) =>
                      setRestaurantData({
                        ...restaurantdata,
                        name: e.target.value,
                      })
                    }
                    className="input_tag"
                  />
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter address"
                    onChange={(e) =>
                      setRestaurantData({
                        ...restaurantdata,
                        address: e.target.value,
                      })
                    }
                    className="input_tag"
                  />
                  <label htmlFor="">Category</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter category"
                    onChange={(e) =>
                      setRestaurantData({
                        ...restaurantdata,
                        category: e.target.value,
                      })
                    }
                    className="input_tag"
                  />
                  <label htmlFor="">Phone</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter phone"
                    onChange={(e) =>
                      setRestaurantData({
                        ...restaurantdata,
                        phone: e.target.value,
                      })
                    }
                    className="input_tag"
                  />
                  <label htmlFor="">Cost</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Enter approx cost per person"
                    onChange={(e) =>
                      setRestaurantData({
                        ...restaurantdata,
                        cost: e.target.value,
                      })
                    }
                    className="input_tag"
                  />
                  <label htmlFor="">Image</label>
                  <input
                    type="file"
                    name=""
                    id=""
                    placeholder="Please select image"
                    onChange={handleImage}
                    className="input_tag"
                  />
                  {/* <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setRestaurantData({ ...restaurantdata, image: base64 })
                    }
                  /> */}
                  <div className="mt-2">
                    <label htmlFor="">Is Featured</label>
                    <div className="d-flex">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="yes"
                          id="flexCheckDefault"
                          onChange={handleFeatured}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="">Is Dineout Pay</label>
                    <div className="d-flex">
                      <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value="yes"
                          onChange={handleDineoutPay}
                          id="flexCheckDefault"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  // onClick={addNewRestaurant}
                >
                  Save changes
                </button>
              </div>
            </div>
          </form>
          {/*  */}
        </div>
      </div>
    </>
  );
}
