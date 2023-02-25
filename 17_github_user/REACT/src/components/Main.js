import React from "react";
import { http, datefy } from "./Functions";

function Header({ themeName, themeHandler, themeIcon }) {
  return (
    <header>
      <h1>devfinder</h1>
      <div className="theme">
        <span className="theme-name">{themeName}</span>
        <img onClick={themeHandler} className="theme-toggle" src={themeIcon} alt="sun" />
      </div>
    </header>
  );
}
function Search({ input, submitHandler, error, inputHandler }) {
  return (
    <div className="search">
      <section>
        <img src={"assets/search.png"} alt="" />
        <form id="myform">
          <input type="text" placeholder="Search GitHub username…" value={input} onChange={inputHandler} />
        </form>
      </section>
      <section>
        <span className="error">{error}</span>
        <button form="myform" type="submit" onClick={submitHandler}>
          Search
        </button>
      </section>
    </div>
  );
}
function Avatar({ avatar_url, login }) {
  return (
    <div className="avatar">
      <img src={avatar_url} alt={login} />
    </div>
  );
}

function UserInfo({ name, login, created_at }) {
  return (
    <div className="user-info">
      <h2>{name ? name : login}</h2>
      <h6>{login}</h6>
      <h3>{datefy(created_at)}</h3>
    </div>
  );
}

function Bio({ bio }) {
  return <div className="bio">{bio ? bio : "This profile has no bio"}</div>;
}

function Statistics({ public_repos, followers, following }) {
  return (
    <div className="rff">
      <div className="repo">
        <span className="heading">Repos</span>
        <span className="count">{public_repos}</span>
      </div>
      <div className="ers">
        <span className="heading">Followers</span>
        <span className="count">{followers}</span>
      </div>
      <div className="ing">
        <span className="heading">Following</span>
        <span className="count">{following}</span>
      </div>
    </div>
  );
}

function Social({ location, blog, html_url, twitter_username, company }) {
  return (
    <div className="social">
      <section>
        <div className={location ? "line" : "line gray"} id="town">
          <div className="img">
            <img src="assets/pin.png" alt="pin" />
          </div>
          <span>{location ? location : "Unavalable"}</span>
        </div>
        <div className="line" id="url">
          <div className="img">
            <img src="assets/url.png" alt="url" />
          </div>
          <a href={blog ? blog : html_url}>{blog ? http(blog) : "Github"}</a>
        </div>
      </section>
      <section>
        <div className={twitter_username ? "line" : "line gray"} id="twitter">
          <div className="img">
            <img src="assets/twitter.png" alt="twitter" />
          </div>
          <span>{twitter_username ? twitter_username : "Not Available"}</span>
        </div>
        <div className="line" id="work">
          <div className="img">
            <img src="assets/work.png" alt="work" />
          </div>
          <span>{company ? company : "@personal"}</span>
        </div>
      </section>
    </div>
  );
}

export { Header, Search, Avatar, UserInfo, Bio, Statistics, Social };
