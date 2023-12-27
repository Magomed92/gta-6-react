import { useState } from "react";
import styles from "./Home.module.css";

function Home() {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleClick = () => {
    setIsSuccess(true);
  };

  return (
    <div className={styles.wrapper}>
      <form>
        {isSuccess ? (
          <div className={styles.success}>
            <h2>Форма отправлена !</h2>
          </div>
        ) : (
          <>
            <h1>GTA 6 - оставь заявку</h1>
            <input type="email" placeholder="Введите свой Email:" />
            <input type="name" placeholder="Введите свой Имя:" />
            <button onClick={handleClick}>Предзаказ ! !</button>
          </>
        )}
      </form>
    </div>
  );
}

export default Home;
