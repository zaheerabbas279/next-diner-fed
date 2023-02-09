import styles from "../styles/OffersHome.module.css";
export default function OffersComponent() {
  return (
    <>
      <div className={styles.offers_div}>
        <div className="container mt-4 mb-4">
          <h4>Best Offers</h4>
          <div className="d-flex align-items-center ">
            <div className="d-flex align-items-center">
              <div className={`card p-4 mx-2 ${styles.offers_card}`}>
                <p className="text-danger font-weight bold mb-0">
                  <strong>FLAT</strong>
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h1 className="text-danger mb-0">30</h1>
                  </div>
                  <div>
                    <p className="mb-0 text-danger">%</p>
                    <p className="mb-0 text-danger">Off</p>
                  </div>
                </div>
                <div>
                  <h3>Instant </h3>
                  <h3>Discount </h3>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="d-flex align-items-center">
              <div className={`card p-4 mx-2 ${styles.offers_card}`}>
                <p className="text-danger font-weight bold mb-0">
                  <strong>FLAT</strong>
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h1 className="text-danger mb-0">50</h1>
                  </div>
                  <div>
                    <p className="mb-0 text-danger">%</p>
                    <p className="mb-0 text-danger">Off</p>
                  </div>
                </div>
                <div>
                  <h3>Instant </h3>
                  <h3>Discount </h3>
                </div>
              </div>
            </div>
            {/*  */}

            <div className="d-flex align-items-center">
              <div className={`card p-4 mx-2 ${styles.offers_card}`}>
                <p className="text-danger font-weight bold mb-0">
                  <strong>FLAT</strong>
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h1 className="text-danger mb-0">10</h1>
                  </div>
                  <div>
                    <p className="mb-0 text-danger">%</p>
                    <p className="mb-0 text-danger">Off</p>
                  </div>
                </div>
                <div>
                  <h3>Instant </h3>
                  <h3>Discount </h3>
                </div>
              </div>
            </div>

            {/*  */}

            <div className="d-flex align-items-center">
              <div className={`card p-4 mx-2 ${styles.offers_card}`}>
                <p className="text-danger font-weight bold mb-0">
                  <strong>FLAT</strong>
                </p>
                <div className="d-flex align-items-center">
                  <div>
                    <h1 className="text-danger mb-0">70</h1>
                  </div>
                  <div>
                    <p className="mb-0 text-danger">%</p>
                    <p className="mb-0 text-danger">Off</p>
                  </div>
                </div>
                <div>
                  <h3>Instant </h3>
                  <h3>Discount </h3>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
