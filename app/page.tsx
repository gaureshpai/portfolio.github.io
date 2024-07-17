import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-80vh flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to HearEase</h1>
      <p className="text-xl mb-3 text-center max-w-2xl">
        HearEase is a comprehensive solution designed to help individuals manage tinnitus through soothing sounds and valuable information. Our platform offers a range of features to improve your experience and provide relief.
      </p>
      <h2 className="text-2xl font-bold mb-3">Features</h2>
      <ul className="text-lg mb-8 text-center max-w-1xl list-disc list-inside">
        <li><strong>About Tinnitus:</strong> Learn about tinnitus, its causes, symptoms, and effective management strategies.</li>
        <li><strong>Music Player:</strong> Access a variety of soothing sounds and music tracks to help mask tinnitus and provide relief.</li>
        <li><strong>View Contributors:</strong> Meet the team behind HearEase and explore their profiles on LinkedIn and GitHub.</li>
        <li><strong>Download App:</strong> Easily download our application for convenient access to all features on the go.</li>
      </ul>
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="/About" legacyBehavior>
          <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">About Tinnitus</a>
        </Link>
        <Link href="/Music-Player" legacyBehavior>
          <a className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Music Player</a>
        </Link>
        <Link href="/Profiles" legacyBehavior>
          <a className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">View Contributors</a>
        </Link>
        <Link href="/download" legacyBehavior>
          <a className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Download App</a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
