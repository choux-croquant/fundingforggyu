import { memo } from "react"
import styles from "./Header.module.css"

const Header = () => {

  return (
    <div className={styles.container}>
        <img className={styles.bannerImg} src="/fundingBanner.png" alt="생일 축하 펀딩을 알리는 광고" />
    </div>
  )
}

export default memo(Header)