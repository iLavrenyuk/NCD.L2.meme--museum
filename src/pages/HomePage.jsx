import React, { useEffect, useState } from 'react';
import { Memes } from '../components/Memes';
import { useMemes } from '../hooks/useMemes';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { getAccountId } from '../services/near';

export const HomePage = () => {
  const [accountId, setAccountId] = useState('');
  const [apiError, setApiError] = useState('');

  const { memes, memeIds } = useMemes({ apiError, setApiError });

  useEffect(() => {
    setAccountId(getAccountId() ?? '');
  }, []);

  return (
    <>
      <Header memeIds={memeIds} accountId={accountId} setAccountId={setAccountId} />
      <Memes accountId={accountId} memes={memes} />
      <Footer />
    </>
  );
};
