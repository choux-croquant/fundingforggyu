import { memo } from "react"
import styles from "./FundingInfo.module.css"

const FundingInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPhrase}>5/30은 <p className={styles.coloredText}>뀨</p>의 생일입니다!</div>
      <div className={styles.secondPhrase}>작업에 허덕이는 학부생이 여름을 날 수 있도록 후원을 해보는 건 어떨까요?</div>
    </div>
  )
}

export default memo(FundingInfo)