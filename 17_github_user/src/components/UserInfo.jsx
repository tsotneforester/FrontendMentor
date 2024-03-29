function datefy(dt) {
  const date = new Date(dt);
  return `${date.toLocaleString("en-US", { day: "numeric" })} ${date.toLocaleString("en-US", { month: "short" })} ${date.toLocaleString("en-US", { year: "numeric" })}`;
}

function UserInfo({ name, login, created_at }) {
  return (
    <div className="user-info">
      <h2>{name || login}</h2>
      <h6>{login}</h6>
      <h3>{datefy(created_at)}</h3>
    </div>
  );
}

export default UserInfo;
