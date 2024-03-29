export default function Avatar({ avatar_url, login }) {
  return (
    <div className="avatar">
      <img src={avatar_url} alt={login} />
    </div>
  );
}
