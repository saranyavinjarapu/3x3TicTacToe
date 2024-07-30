const GAMEDATA_LOCAL_STORAGE_KEY = "game-data";

const getGameDataLocalStorage = () => {
  if (!localStorage.getItem(GAMEDATA_LOCAL_STORAGE_KEY)) {
    return {
      X: 0,
      O: 0,
      BOTH: 0,
    };
  }
  return JSON.parse(localStorage.getItem(GAMEDATA_LOCAL_STORAGE_KEY) || "{}");
};

const setGameDataLocalStorage = (storage) => {
  localStorage.setItem(GAMEDATA_LOCAL_STORAGE_KEY, JSON.stringify(storage));
};

export { getGameDataLocalStorage, setGameDataLocalStorage };
