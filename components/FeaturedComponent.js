import styles from "../styles/Featured.module.css";

export default function FeaturedComponent({ featured }) {
  return (
    <>
      <div className={styles.restaurantList}>
        <div className="row">
          {featured.map((item) => {
            return (
              <div className="col-md-4" key={item._id}>
                <div className={`card p-2 mt-2 ${styles.restaurant_img}`}>
                  <div className="position-relative">
                    <img src={item.image} alt="" className={styles.food_img} />
                    <div className={`position-absolute ${styles.ratings_div}`}>
                      <h6 className="text-light">4.0</h6>
                    </div>
                  </div>
                  <h6>{item.name}</h6>
                  <p className={`small text-secondary mb-0 ${styles.address}`}>
                    {item.address}
                  </p>
                  <p className="small text-secondary mb-0">
                    {item.cost} per person
                  </p>
                  <p className="small text-secondary mb-0">{item.category}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
