import styles from './App.module.css'
import Header from './components/Header';
import RewardCard from './components/RewardCard';
import cardData from './assets/cardData.json'
import FundingInfo from './components/FundingInfo';
import PaymentInfo from './components/PaymentInfo';

function App() {

  return (
    <div className={styles.App}>
      <header>
        <Header></Header>
      </header>
      <section className={styles.infoContainer}>
        <FundingInfo />
      </section>
      <section className={styles.cardContainer}>
        {cardData.data.map((card) => {
          return (
            <RewardCard key={card.id} price={card.price} title={card.title} desc={card.desc} reward={card.reward} />
          )
        })}
      </section>
      <footer className={styles.infoContainer}>
        <PaymentInfo />
      </footer>
    </div>
  );
}

export default App;
