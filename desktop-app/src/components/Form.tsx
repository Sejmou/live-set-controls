import { useState } from 'react';
import { socket } from '../socket';
import Button from './Button';
import { serializeError } from 'serialize-error';

const Form = () => {
  const [value, setValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string>();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setValue('');
    setIsLoading(true);

    // send the value to the server, and once the server responds, set isLoading to false
    socket
      .timeout(5000)
      .emit('create-something', value, (err: any, response: any) => {
        setIsLoading(false);
        if (err) {
          const errorJSON = JSON.stringify(serializeError(err), null, 2); // need to use serializeError because w/ JSON.stringify(err) empty object will be returned: https://stackoverflow.com/a/50738205/13727176
          const errorMsg = `An error occurred while sending the message:`;
          setResponseMessage(`${errorMsg}\n${errorJSON}`);
          console.error(errorMsg, err);
          return;
        }
        setResponseMessage(
          'Message sent successfully. Response from server: ' + response
        );
      });
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Send a message to the socket</h3>
        <div className="flex gap-1">
          <input
            className="border p-2 rounded"
            onChange={e => setValue(e.target.value)}
            placeholder="Enter a message..."
          />
          <Button type="submit" disabled={isLoading} label="Submit" />
        </div>
      </form>
      {responseMessage && (
        <pre>
          <span className="text-sm">{responseMessage}</span>
        </pre>
      )}
    </>
  );
};

export default Form;
