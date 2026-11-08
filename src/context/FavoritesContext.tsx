import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { getLocalStorage, setLocalStorage } from '../lib/storage';

interface FavoritesContextType {
  favorites: string[];
  addFavorite: (productId: string) => void;
  removeFavorite: (productId: string) => void;
  isFavorite: (productId: string) => boolean;
  toggleFavorite: (productId: string) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>(() => 
    getLocalStorage<string[]>('cubiq-favorites', [])
  );

  useEffect(() => {
    setLocalStorage('cubiq-favorites', favorites);
  }, [favorites]);

  const addFavorite = (productId: string) => {
    setFavorites(current => 
      current.includes(productId) ? current : [...current, productId]
    );
  };

  const removeFavorite = (productId: string) => {
    setFavorites(current => current.filter(id => id !== productId));
  };

  const isFavorite = (productId: string) => {
    return favorites.includes(productId);
  };

  const toggleFavorite = (productId: string) => {
    if (isFavorite(productId)) {
      removeFavorite(productId);
    } else {
      addFavorite(productId);
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
