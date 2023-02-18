import { invoke } from '@tauri-apps/api/tauri';
import Image from 'next/image';
import { useState } from 'react';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    setGreetMsg(await invoke('greet', { name }));
  }

  return (
    <div className="container">
      <h1>Welcome to Tauri!</h1>

      <div className="row">
        <span className="logos">
          <a href="https://nextjs.org" target="_blank" rel="noreferrer">
            <Image
              width={144}
              height={144}
              src="/next.svg"
              className="logo next"
              alt="Next logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://tauri.app" target="_blank" rel="noreferrer">
            <Image
              width={144}
              height={144}
              src="/tauri.svg"
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
        </span>
        <span className="logos">
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <Image
              width={144}
              height={144}
              src="/react.svg"
              className="logo react"
              alt="React logo"
            />
          </a>
        </span>
      </div>

      <p>Click on the Tauri, Next, and React logos to learn more.</p>

      <div className="row">
        <form
          onSubmit={e => {
            e.preventDefault();
            greet().catch(console.error);
          }}
        >
          <input
            id="greet-input"
            onChange={e => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form>
      </div>

      <p>{greetMsg}</p>
    </div>
  );
}

export default App;
