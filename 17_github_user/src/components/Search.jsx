function Search({ input, submitHandler, warning, inputHandler }) {
  return (
    <div className="search">
      <section>
        <img src={"assets/search.png"} alt="" />
        <form id="myform">
          <input type="text" placeholder="Search GitHub username…" value={input} onChange={inputHandler} />
        </form>
      </section>
      <section>
        <span className="error">{warning && "No Results"}</span>
        <button form="myform" type="submit" onClick={submitHandler}>
          Search
        </button>
      </section>
    </div>
  );
}

export default Search;
