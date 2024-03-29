import { Avatar, UserInfo, Bio, Statistics, Social } from "./";

export default function Card({ data }) {
  return (
    <main>
      <Avatar {...data} />
      <UserInfo {...data} />
      <div className="details">
        <Bio {...data} />
        <Statistics {...data} />
        <Social {...data} />
      </div>
    </main>
  );
}
