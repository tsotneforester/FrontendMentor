function http(link) {
  let array = link.split("//");
  return array[1];
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
          <span>{twitter_username || "Not Available"}</span>
        </div>
        <div className="line" id="work">
          <div className="img">
            <img src="assets/work.png" alt="work" />
          </div>
          <span>{company || "@personal"}</span>
        </div>
      </section>
    </div>
  );
}

export default Social;
