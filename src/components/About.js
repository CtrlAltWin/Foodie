import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const About = () => {
  const [user, setuser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetchData("https://api.github.com/users/raunak161");
    const json = await data.json();
    setuser(json);
  };

  if (user == null) return <Shimmer />;

  const { name, location, avatar_url } = user;

  return (
    <div>
      <img src={avatar_url}></img>
      <h2>{name}</h2>
      <h2>{location}</h2>
    </div>
  );
};
export default About;
