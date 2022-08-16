import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { AnimeList } from '../components/AnimeList/AnimeList';
import { TrendingAnime } from '../components/TrendingAnime/TrendingAnime';
// import { OneAnime } from '../components/OneAnime/OneAnime';

export const AppRoutes = () => {
   return (
      <Routes>
         <Route path='/' element={<AnimeList />} />
         <Route path="/Trending" element={<TrendingAnime />} />
      </Routes>
   );
};
