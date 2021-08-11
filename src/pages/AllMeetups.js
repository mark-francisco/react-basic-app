import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // the .useEffect() hook lets you define conditions for when certain code should be run. 2 arguments: (fn that should be conditionally run, array of dependencies). Under useEffect, the fn will run as long as the values in the array of dependencies have not changed since the last fn execution.
  useEffect(() => {
    setIsLoading(true);

    fetch("https://react-basic-app-43c81-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        // .json() converts a JSON response to a plain JS object. since response.json() returns another promise, we must do another .then to access the actual data once response.json() is resolved.
        return response.json();
      })
      .then((data) => {
        // "data" fetched from firebase is returned as a single object, where each meetup in the collection is a key on that object. each key then contains, as its value, the list of meetup properties. we must transform this data to a JS array.
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            // JS spread operator adds all of the meetup attributes & values inside each "key" into this new meetup object.
            ...data[key],
          };
          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {/* React CAN render arrays of JS objects as JSX elements. The .map fn in JS returns an array of transformed objects. */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
