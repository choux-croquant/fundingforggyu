import { memo } from "react"
import styles from "./Header.module.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"

const Header = () => {

  return (
    <div className={styles.container}>
      <Carousel className={styles.carousel}
        autoPlay={true}
        infiniteLoop={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}>
        <div className={styles.slide}>
          <img src="/background.jpg" alt="aa" />
        </div>
        <div className={styles.slide}>
          <img src="/background.jpg" alt="aa" />
        </div>
        <div className={styles.slide}>
          <img src="/background.jpg" alt="aa" />
        </div>
      </Carousel>
    </div>
  )
}

export default memo(Header)