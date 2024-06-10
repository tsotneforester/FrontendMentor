import styles from "./Modal.module.scss";
import { useContext } from "react";
import { AppContext } from "../Context";

export default function Modal() {
  const { showModal } = useContext(AppContext);

  let visibility = showModal ? styles.visible : styles.hidden;

  return (
    <div className={visibility}>
      <img src="/images/icon-success-check.svg" alt="" />
      <h1>Message Sent!</h1>
      <p>Thanks for completing the form. We’ll be in touch soon!</p>
    </div>
  );
}
