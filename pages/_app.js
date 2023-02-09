import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Provider } from "react-redux";
import store from "../redux/store";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <Provider store={store}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </Provider>
  );
}
