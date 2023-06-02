type Props = {};
import { socket } from '../socket';
import Button from './Button';

const ConnectionManager = (props: Props) => {
  function connect() {
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <div className="flex gap-2">
      <Button onClick={connect} label="Connect" />
      <Button onClick={disconnect} label="Disconnect" />
    </div>
  );
};

export default ConnectionManager;
