import styles from './GameOver.module.css';

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim de jogo!</h1>
      <h2>
        A sua pontução foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Recomeçar o jogo</button>
    </div>
  );
};

export default GameOver;
