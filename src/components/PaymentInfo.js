import { memo } from "react"
import styles from "./PaymentInfo.module.css"

const PaymentInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phrase}>OOOOOOOOOO를 통해 후원금을 전달하시면</div>
      <div className={styles.phrase}>정리하여 전달하도록 하겠습니다</div>
      <div className={styles.bottomPhrase}>입금자명에 이름을 꼭 적어주세요!</div>
    </div>
  )
}

export default memo(PaymentInfo)