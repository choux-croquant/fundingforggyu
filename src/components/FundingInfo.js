import { memo } from "react"
import styles from "./FundingInfo.module.css"

const FundingInfo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.firstPhrase}>5/30은 <p className={styles.coloredText}>뀨</p>의 생일입니다!</div>
      <div className={styles.secondPhrase}>당신의 후원으로 고졸을 석사로 바꿔보세요!</div>
      <div className={styles.secondPhrase}>특정 금액이상 후원 시 보상을 받을 수도 아닐 수도</div>
    </div>
  )
}

export default memo(FundingInfo)