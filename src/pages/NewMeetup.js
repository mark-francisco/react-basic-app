import { useHistory } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  // useHistory() hook gives us a history object. the history object allows us to manipulate the browser's history.
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // in vanilla JS, the fetch fn allows you to send http requests.
    // firebase allows you to append onto the URL to specify collections for your data. firebase requires that your API URLs end with ".json"
    fetch("https://react-basic-app-43c81-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      // JSON.stringify converts JS objects to JSON strings
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // history.replace() navigates you to a different route, without allowing for the use of .back().
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
