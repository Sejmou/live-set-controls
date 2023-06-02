import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import { invoke } from '@tauri-apps/api/tauri';
import { socket } from './socket';
import ConnectionState from './components/ConnectionState';
import Events from './components/Events';
import ConnectionManager from './components/ConnectionManager';
import Form from './components/Form';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');
  const { isConnected, fooEvents } = useSocket();

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div className="flex flex-col items-center content-center h-full border">
      <h1>Welcome to Tauri!</h1>

      <div className="flex flex-row bg-purple-400">
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="w-16 h-16" alt="Vite logo" />
        </a>
        <a href="https://tauri.app" target="_blank">
          <img src="/tauri.svg" className="w-16 h-16" alt="Tauri logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="w-16 h-16" alt="React logo" />
        </a>
      </div>

      <p>Click on the Tauri, Vite, and React logos to learn more.</p>

      <form
        className="flex flex-row"
        onSubmit={e => {
          e.preventDefault();
          greet();
        }}
      >
        <input
          id="greet-input"
          onChange={e => setName(e.currentTarget.value)}
          placeholder="Enter a name..."
        />
        <button type="submit">Greet</button>
      </form>

      <p>{greetMsg}</p>

      <div className="flex flex-col gap-1">
        <h2>Socket Demo</h2>
        <ConnectionState isConnected={isConnected} />
        <Events events={fooEvents} />
        <ConnectionManager />
        <Form />
      </div>
    </div>
  );
}

export default App;

/**
 * adapted from https://socket.io/how-to/use-with-react
 */
export function useSocket() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [fooEvents, setFooEvents] = useState<any[]>([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value: any) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('foo', onFooEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('foo', onFooEvent);
    };
  }, []);

  return {
    isConnected,
    fooEvents,
  };
}
