import "../styles/sass/main.scss";
import Layout from "../components/layouts/layout";

function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
