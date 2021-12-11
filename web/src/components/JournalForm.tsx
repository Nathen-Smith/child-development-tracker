import { useState } from 'react';

type formProps = {
  pageTitle: string,
  buttonText: string,
  submitFunction: (title: string, body:string) => void
}

function JournalForm(props : formProps) {
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  return (
    <form className="mx-2 space-y-3">
      <div className="flex flex-1 flex-row justify-between align-center">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Child Development Tracker</h1>
          <h2 className="text-xl font-bold">{props.pageTitle}</h2>
        </div>
        <button className="h-10 px-6 font-semibold rounded-md border border-gray-200 text-gray-900 mr-6" 
        onClick={() => props.submitFunction(title, body)}>{props.buttonText}</button>
      </div>
      <input className="border w-1/2 block" type="text" value={title} onChange={event => setTitle(event.target.value)} />
      <textarea className="border w-1/2 h-1/4 block" rows={5} value={body} onChange={event => setBody(event.target.value)} />
    </form>
  );
}

export default JournalForm;