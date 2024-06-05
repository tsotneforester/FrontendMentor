import React, { useContext } from "react";
import styles from "./Definition.module.scss";
import Seperator from "./Seperator";
import { AppContext } from "../Context";
import Error from "./Error";
import Play from "../assets/icon-play.svg?react";
import Sibling from "./Sibling";

export default function Definition() {
  const { data, isLoading, apiError } = useContext(AppContext);
  const { name, phonetic, meanings = [], url, audio } = data;

  const handlePlaySound = (link) => {
    const audio = new Audio(link);
    audio.play();
  };

  return (
    <div className={styles.definition}>
      {isLoading && <h1 className={styles.loading}>Loading...</h1>}
      {Object.keys(data).length > 0 && !apiError && (
        <>
          <div className={styles.word}>
            <h1>{name}</h1>
            <h2>{phonetic}</h2>
            {audio && <Play className={styles.icon} onClick={() => handlePlaySound(audio)} />}
          </div>

          {meanings.map((e, i) => {
            return (
              <div key={i}>
                <Seperator title={e.partOfSpeech} />
                <p className={styles.meaning}>Meaning</p>
                <ul className={styles.list}>
                  {e.definitions.map((def, i) => {
                    return (
                      <li key={i}>
                        {def.definition} {def?.example && <p>{def.example}</p>}
                      </li>
                    );
                  })}
                </ul>

                <Sibling arr={e.synonyms} name="Synonyms" />
                <Sibling arr={e.antonyms} name="Aantonyms" />
              </div>
            );
          })}

          <div className={styles.source}>
            <p>Source</p>
            <a href={url} target="_blank">
              {url}
              <img src="./assets/icon-new-window.svg" />
            </a>
          </div>
        </>
      )}
      {apiError && <Error text={apiError} />}
    </div>
  );
}
