export default function Statistics({ public_repos, followers, following }) {
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
