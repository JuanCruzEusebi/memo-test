import Memotest from './components/Memotest'
import Score from './components/Score'
import Leaderboard from './components/Leaderboard';
import { ReactDOM } from 'react';

export default function App() {
  return (
    <div className='main-container'>
      <Score/>
      <Memotest />
      <Leaderboard/>
    </div>
  );
}
