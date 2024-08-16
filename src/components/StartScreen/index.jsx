import styles from './StartScreen.module.css';

const StartScreen = ({ startGame }) => {
  return (
    <div className={styles.start}>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar!</p>
      <button onClick={startGame}>Comecar o jogo</button>
    </div>
  );
};

export default StartScreen;
