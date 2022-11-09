import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'
import Nav from '../Components/Nav-2'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
  <Nav />
  <Component {...pageProps} />
  </>
  );
}

export default MyApp
