import '@/styles/globals.scss'
import Header from "@/pages/components/header/Header";
import Footer from "@/pages/components/footer/Footer";
import Wrapper from "@/pages/components/wrapper/Wrapper";
import styles from '@/styles/figures.module.scss'
import { Inter } from 'next/font/google'
import Image from "next/image";
import purple_light from "@/assets/images/purple_light.svg";
import purple_ball from "@/assets/images/purple_ball.png";
import red_ball from "@/assets/images/red_ball.png";
import red_ball_mini from "@/assets/images/red_ball_mini.png";
import red_light from "@/assets/images/red_light.svg";


const inter = Inter({ subsets: ['cyrillic-ext'] })

export default function App({ Component, pageProps }) {
  return (
      <div className={inter.className}>
          <Wrapper>
              {/*<Image src={purple_light} alt={'purple_light'} className={styles.purple_light}/>*/}
              {/*<Image src={purple_ball} alt={'purple_ball'} className={styles.purple_ball}/>*/}
              {/*<Image src={red_ball} alt={'red_ball'} className={styles.red_ball}/>*/}
              {/*<Image src={red_ball_mini} alt={'red_ball_mini'} className={styles.red_ball_mini}/>*/}
              {/*<Image src={red_light} alt={'red_light'} className={styles.red_light}/>*/}
              <Header />
              <Component {...pageProps} />
              <Footer />
          </Wrapper>
      </div>

      )
}
