type Props = {
  isConnected: boolean;
};

const ConnectionState = ({ isConnected }: Props) => {
  return <p>State: {isConnected ? 'Connected' : 'Not connected'}</p>;
};

export default ConnectionState;
