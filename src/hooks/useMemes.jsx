import { getMemes, getMeme } from '../services/near';
import { useState, useCallback, useEffect } from 'react';

export const useMemes = ({ setApiError }) => {
  const [memes, setMemes] = useState([]);

  const updateValues = useCallback(async () => {
    try {
      const memeIds = await getMemes();
      const data = await Promise.all(
        memeIds.reverse().map(async (id) => {
          const memeData = await getMeme(id);
          return { ...memeData, id };
        })
      );
      setMemes(data);
    } catch (error) {
      setApiError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateValues();
  }, [updateValues]);

  return {
    memes,
  };
};
