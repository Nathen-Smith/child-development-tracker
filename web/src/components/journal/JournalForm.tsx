import React, { useState } from "react";

interface FormProps {
  pageTitle: string;
  buttonText: string;
  submitFunction: (title: string, body: string) => void;
}

export const JournalForm: React.FC<FormProps> = ({
  pageTitle,
  buttonText,
  submitFunction,
}) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  return (
    <form className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 mx-2 space-y-3">
      <div className="flex flex-1 flex-row justify-between align-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Child Development Tracker</h1>
          <h2 className="text-xl font-bold">{pageTitle}</h2>
        </div>
        <button
          className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 mr-6"
          onClick={() => submitFunction(title, body)}
        >
          {buttonText}
        </button>
      </div>
      <input
        className="border w-1/2 block"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        className="border w-1/2 h-1/4 block"
        rows={5}
        value={body}
        onChange={(event) => setBody(event.target.value)}
      />
    </form>
  );
};
