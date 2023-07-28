import '@/styles/globals.scss'
import Header from "@/pages/components/header/Header";
import Footer from "@/pages/components/footer/Footer";
import Wrapper from "@/pages/components/wrapper/Wrapper";

export default function App({ Component, pageProps }) {
  return (
      <Wrapper>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Wrapper>
      )
}
