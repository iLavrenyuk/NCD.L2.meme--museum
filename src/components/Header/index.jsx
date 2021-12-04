import React from 'react';
import { AddMemeForm } from './AddMemeForm';

export const Header = ({ accountId }) => {
  return (
    <header id="header" className="relative header-bg">
      <img
        src={require('../../assets/img/image272.png')}
        alt="explode"
        className="hidden md:block absolute top-0 right-0"
      />
      <img
        src={require('../../assets/img/image1342.png')}
        alt="trophy"
        className="hidden md:block absolute -bottom-12 left-0"
      />
      <img
        src={require('../../assets/img/image1411.png')}
        alt="trophy"
        className="hidden md:block absolute -bottom-12 right-0"
      />

      <img
        src={require('../../assets/img/Ellipse22.png')}
        alt="lights"
        className="hidden md:block absolute left-0 top-16"
      />
      <img
        src={require('../../assets/img/Ellipse24.png')}
        alt="lights"
        className="hidden md:block absolute left-44 xl:left-96 top-0"
      />
      <img
        src={require('../../assets/img/Ellipse21.png')}
        alt="lights"
        className="hidden md:block absolute right-0 top-44"
      />

      <div className="w-full h-3 bg-gradient-pink"></div>

      <div className="container mx-auto px-6">
        <nav className="mt-6 flex items-center justify-between py-3">
          <a
            href="https://github.com/Learn-NEAR/NCD.L1.sample--meme-museum"
            target="_blank"
            className="flex"
            rel="noreferrer"
          >
            <img src={require('../../assets/img/near_logo_stack_1.png')} alt="" className="border-r-2 border-white" />
            <div className="ml-2">
              <p className="text-gradient-blue text-2xl font-bold tracking-tight">Memes</p>
              <p className="-mt-2 font-josefin text-white text-2xl">museum</p>
            </div>
          </a>
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-white">
              <img src={require('../../assets/img/near_logo_stack2.png')} alt="" />
            </div>

            <div v-if="accountId">
              <p className="text-gradient-blue text-sm md:text-base">{'accountId'}</p>
              <button click="signOut" className="text-white font-bold ml-3">
                Log out
              </button>
            </div>

            <button v-else click="signIn" className="ml-4 text-white text-sm md:text-xl font-bold">
              Log in with <span className="text-gradient-blue">NEAR Wallet</span>
            </button>
          </div>
        </nav>

        <div className="pb-24 xl:pb-40 2xl:pb-48">
          <div className="lg:mt-3 2xl:mt-14 text-center">
            <h1 className="flex justify-center items-baseline space-x-2 text-4xl lg:text-6xl 2xl:text-8xl text-white font-bold">
              <img
                src={require('../../assets/img/image1123.png')}
                alt="pig"
                className="w-9 lg:w-20 h-9 lg:h-20 mr-3 -pb-4"
              />
              Meme Museum
              <span className="inline-block rounded-sm bg-gradient-blue w-2 md:w-5 h-2 md:h-5"></span>
            </h1>
            <p className="mt-2 2xl:mt-4 text-white text-base md:text-2xl tracking-wide">
              Share your favorite MEME. Comment, vote and <br className="hidden lg:block" /> engage with all the cool
              memes
            </p>
          </div>

          {accountId ? <AddMemeForm v-if="accountId" addMeme="addMeme" memes="memes" /> : null}
        </div>
      </div>
    </header>
  );
};
