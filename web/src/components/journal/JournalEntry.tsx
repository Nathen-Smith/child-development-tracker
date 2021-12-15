import React, { useUser } from "reactfire";
import axios from "../../axios";
import { JournalForm } from "./JournalForm";

export const JournalEntry = () => {
  const { data: user } = useUser();
  const postFunction = (title: string, body: string) => {
    const post = {
      title: title,
      body: body,
      email: user?.email,
    };
    axios.post("/journal", post).then((res) => {});
  };
  return (
    <JournalForm
      pageTitle="New Journal Entry"
      buttonText="Post"
      submitFunction={async () => postFunction}
    />
  );
};
