import styles from "./Main.module.scss";
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../Context";
import Quote from "./Quote";
import Greeting from "./Greeting";
import Time from "./Time";
import Location from "./Location";
import Toggler from "./Toggler";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Main() {
  const { isLoading, timeObject, showMore, setShowMore } = useContext(AppContext);

  return (
    <div className={showMore ? styles.mainTransformed : styles.main}>
      <Quote />
      <article className={isLoading ? styles.articleLoading : styles.article}>
        {isLoading ? (
          <ScaleLoader color="white" height={35} loading margin={2} radius={1} speedMultiplier={2} width={5} />
        ) : (
          <>
            <Greeting />
            <Time />
            <Location />
            <Toggler />
          </>
        )}
      </article>
    </div>
  );
}
