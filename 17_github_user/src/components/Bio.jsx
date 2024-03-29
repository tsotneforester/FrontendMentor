export default function Bio({ bio }) {
  return <div className="bio">{bio || "This profile has no bio"}</div>;
}
