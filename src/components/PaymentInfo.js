import { memo } from "react"
import styles from "./PaymentInfo.module.css"

const PaymentInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phrase}>아래 계좌를 통해 후원금을 보내면</div>
      <div className={styles.phrase}>정리하여 전달하도록 하겠습니다</div>
      <div className={styles.phrase}>입금자명에 이름을 꼭 적어주세요!</div>
      <div className={styles.phrase}>TOSS : 1000-0112-4985 (ㅊㅎㄱ)</div>
      <div className={styles.bottomPhrase}>문의 : choifrance@gmail.com / @choux_croquant</div>
    </div>
  )
}

export default memo(PaymentInfo)