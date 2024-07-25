import "./App.css";
import React from "react";
import axios from "axios";

export default function App() {
  const [people, setPeople] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3500/api/people")
      .then((response) => {
        const people = response.data.people;
        setPeople(people);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const peopleElement = people.map((person) => {
    return (
      <div key={person.id}>
        <h1>Name: {person.name}</h1>
        <h2>Age: {person.age}</h2>
        <p>Id: {person.id}</p>
      </div>
    );
  });

  return (
    <div className="text-emerald-700 p-5 > *:mb-5 border-emerald-700 border-2 m-2">
      {peopleElement}
    </div>
  );
}
