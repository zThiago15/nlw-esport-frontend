import { GameBanner } from './components/GameBanner';
import { CreateAdBanner } from './components/CreateAdBanner';
import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import axios from 'axios';

import './styles/main.css';
import logo from './assets/images/logo.svg';
import { CreateAdModal } from './components/CreateAdModal';


interface Games {
  bannerUrl: string;
  id: string;
  title: string;
  _count: {
    Ad: number;
  }
}

function App() {
  
  const [games, setGames] = useState<Games[]>([]);

  // useEffect( () => {
  //   axios('http://localhost:3001/games')
  //     .then((result) => setGames(result.data));
  // }, []);

  
  return (
   <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={ logo } alt="logo" />
    <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui.</h1>

    

    <div className="grid grid-cols-6 gap-6 mt-16">
      { games.map(({ bannerUrl, title, _count, id }, index) => {
        return (
          <GameBanner key={ id } bannerUrl={ bannerUrl } name={ title } adsQuantity={ _count.Ad } />
        );
      }) }
    </div>

    <Dialog.Root>
      <CreateAdBanner />
      <CreateAdModal />
    </Dialog.Root>
   </div>
  )
}

export default App
