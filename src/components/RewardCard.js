import { memo } from "react"
import styles from "./RewardCard.module.css"

const RewardCard = ({price, title, desc, reward}) => {
  return (
    <div className={styles.container}>
      <div className={styles.priceText}>{price}원<p className={styles.smallCharacter}> +</p></div>
      <div className={styles.titleText}>{title}</div>
      <div className={styles.descText}>{desc}</div>
      <div className={styles.rewardText}>{reward ? `리워드 : ${reward}` : null}</div>
    </div>
  )
}

export default memo(RewardCard)