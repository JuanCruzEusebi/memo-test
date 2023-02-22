import { useState } from 'react'

const IMAGES = [
  'https://icongr.am/devicon/angularjs-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/babel-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/bower-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/chrome-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/c-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/ie10-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/javascript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/typescript-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/python-original.svg?size=128&color=currentColor',
  'https://icongr.am/devicon/docker-original.svg?size=128&color=currentColor'
].flatMap((image) => [image, image]).sort(() => Math.random() - 0.5)

function App() {
  const [guessed, setGuessed] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  return (
    <ul
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(128px, 1fr))',
        gap: 24,
      }}
    >
      {IMAGES.map((image) => (
        <li
          key={image}
          style={{ padding: 12, border: '1px solid #666', borderRadius: 12, cursor: 'pointer' }}
        >
          {selected.includes(image) || guessed.includes(image) ? (
            <img src={image} alt='icon' />
          ) : (
            <img
              key={image}
              src={'https://icongr.am/clarity/eye.svg?size=128&color=currentColor'} alt='icon'
            />   
          )}
        </li>
      ))}
    </ul>
  );
}

export default App;