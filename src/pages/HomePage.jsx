import React from 'react';
import { Memes } from '../components/Memes';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';

export const HomePage = () => {
  return (
    <>
      <Header accountId="accountId" signIn="signIn" signOut="signOut" addMeme="addMeme" memes="memes" />

      <Memes
        accountId="accountId"
        signIn="signIn"
        memes="memes"
        contractId="CONTRACT_ID"
        addComment="addComment"
        donate="donate"
        vote="vote"
      />

      <Footer />
    </>
  );
};
