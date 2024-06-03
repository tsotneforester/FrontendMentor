import { useState, useContext, useEffect } from "react";
import styles from "./SearchBar.module.scss";
import { AppContext } from "../Context";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function SearchBar() {
  // API handling and data
  const { setData, setApiError, setILoading } = useContext(AppContext);
  const navigate = useNavigate();
  // input handling and validation
  const [inputField, setInputField] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  let { query } = useParams();

  async function fetchAPI(word) {
    try {
      const res = await axios("https://api.dictionaryapi.dev/api/v2/entries/en/" + word);
      let tempObj = res.data[0];

      let obj = { name: tempObj.word, url: tempObj.sourceUrls?.[0], audio: getAudio(tempObj.phonetics), phonetic: tempObj.phonetic || getPhonetic(tempObj.phonetics), meanings: tempObj.meanings };

      function getAudio(arr) {
        let audio = "";
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]["audio"].length > 0) {
            audio = arr[i].audio;
          }
        }
        return audio;
      }
      function getPhonetic(arr) {
        let phonetic = "";
        for (let i = 0; i < arr.length; i++) {
          if (arr[i]["text"]) {
            phonetic = arr[i].text;
          }
        }

        return phonetic;
      }

      setData(obj);
      setInputField("");
      setApiError(null);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code that falls out of the range of 2xx
        console.error("Response data:", error.response.data);
        setApiError(error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Request data:", error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error message:", error.message);
      }
    } finally {
      setILoading(false);
    }
  }

  const validateValue = (inputValue) => {
    let error = "";

    if (inputValue.length == 0) {
      error = "Whoops, can’t be empty…";
    }

    return error;
  };
  const handleChange = (e) => {
    setInputField(e.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(validateValue(inputField));
    setSubmitting(true);
    if (inputField) {
      setILoading(true);
      fetchAPI(inputField);
      navigate(`/${inputField}`);
      setApiError("");
      setData({});
      setError("");
    }
  };

  useEffect(() => {
    if (query) {
      fetchAPI(query);
    }
  }, [query]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input className={error && submitting && styles.empty} type="text" value={inputField} onChange={handleChange} placeholder="Search for any word…" />
      <input type="image" alt="Submit" src="./assets/icon-search.svg" />
      {error && submitting && <p className={styles.validation}>Whoops, can’t be empty…</p>}
    </form>
  );
}
