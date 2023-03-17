const Person = ({ image, name, age, city, likes, photos, followers }) => {
  return (
    <div class="container">
      <section className="image">
        <div className="frame">
          <img src={image} alt={name} />
        </div>
      </section>
      <section className="person">
        <h1>{name}</h1>
        <h2>{age}</h2>
      </section>
      <h3>{city}</h3>
      <section className="statistics">
        <div>
          <h4>{followers}</h4>
          <h5>Followers</h5>
        </div>
        <div>
          <h4>{likes}</h4>
          <h5>Likes</h5>
        </div>
        <div>
          <h4>{photos}</h4>
          <h5>Photos</h5>
        </div>
      </section>
    </div>
  );
};
Person.defaultProps = {
  name: "default name",
  city: "Unknown",
  likes: "-",
  age: "--",
};

export default Person;
