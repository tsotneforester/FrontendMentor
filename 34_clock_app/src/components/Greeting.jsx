import styles from "./Greeting.module.scss";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context";

export default function Greeting() {
  const { timeObject } = useContext(AppContext);
  const [greetingText, setGreetingText] = useState(null);

  useEffect(() => {
    setGreetingText(() => {
      let text = "";
      let hour = new Date(timeObject?.datetime).getHours();
      if (hour >= 5 && hour < 12) {
        text = "Good morning";
      } else if (hour >= 12 && hour < 18) {
        text = "Good afternoon";
      } else {
        text = "Good evening";
      }
      return text;
    });
  }, []);

  return (
    <div className={styles.greeting}>
      <img src={`./assets/icon-${timeObject?.lightTheme ? "sun" : "moon"}.svg`} />
      <h1>
        {greetingText} <span>, IT’S CURRENTLY</span>
      </h1>
    </div>
  );
}
