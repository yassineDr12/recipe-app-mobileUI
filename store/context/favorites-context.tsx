import React, { createContext, useContext, useState } from "react";

type FavoritesContextType =
  | {
      ids: string[];
      isFavorite: (id: string) => boolean;
      toggleFavorite: (id: string) => void;
    }
  | undefined;

const FavoritesContext = createContext<FavoritesContextType>(undefined);

const FavoritesContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [ids, setIds] = useState<string[]>([]);

  const isFavorite = (id: string) => ids.includes(id);

  const toggleFavorite = (id: string) => {
    if (!ids.includes(id)) {
      setIds((currFavIds) => [...currFavIds, id]);
    } else {
      setIds((currFavIds) => currFavIds.filter((itemId) => itemId !== id));
    }
  };

  return <FavoritesContext.Provider value={{ ids, toggleFavorite, isFavorite }}>{children}</FavoritesContext.Provider>;
};

const useFavoritesContext = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavoritesContext must be used within a FavoritesContextProvider");
  return context;
};

export { FavoritesContextProvider, useFavoritesContext };
