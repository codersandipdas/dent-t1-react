import React, { useRef, useEffect } from 'react';
import './App.css';
import audioSrc from './assets/audio/audio.mp3';
import Mousetrap from 'mousetrap';

function App() {
  const playerRef = useRef();
  const wordsRef = useRef();
  const highlight = useRef();

  useEffect(() => {
    const onTimeUpdate = () => {
      //console.log(playerRef.current.currentTime);
      const activeWordIndex = TRANSCRIPT.words.findIndex((word) => {
        return word.startTime > playerRef.current.currentTime;
      });

      const wordElement = wordsRef.current.childNodes[activeWordIndex];
      if (wordElement) {
        highlight.current.style.left = wordElement.offsetLeft + 'px';
        highlight.current.style.height = wordElement.offsetHeight + 'px';
        highlight.current.style.width = `${wordElement.offsetWidth + 1}px`;
        highlight.current.style.top = wordElement.offsetTop + 'px';
        highlight.current.textContent = wordElement.innerText;
      }
    };

    const pref = playerRef.current;
    pref.addEventListener('timeupdate', onTimeUpdate);
    return () => pref.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  Mousetrap.bind(['j', 'left'], function () {
    playerRef.current.currentTime -= 5;
  });
  Mousetrap.bind(['k', 'right'], function () {
    playerRef.current.currentTime += 5;
  });
  Mousetrap.bind('space', function () {
    playerRef.current.paused
      ? playerRef.current.play()
      : playerRef.current.pause();
  });

  return (
    <main>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-md-8 mx-auto'>
            <h1 className='h1 fw-bold text-center py-4 mb-0'>
              Dent Assignment 1
            </h1>
            <hr></hr>
          </div>

          <div className='col-12 py-4 col-md-8 col-xl-6 mx-auto text-center'>
            <div className='' style={{ border: '1px solid #cccccc' }}>
              <audio
                className='audio_ui'
                controls
                src={audioSrc}
                ref={playerRef}
              />
              <div
                className='text-start p-3 text-dark position-relative'
                ref={wordsRef}
              >
                {TRANSCRIPT.words.map((word, i) => (
                  <span className='t-text d-inline-block mx-1' key={i}>
                    {word.val}
                  </span>
                ))}
                <div ref={highlight} className='highlight'></div>
              </div>
            </div>

            <div className='credit my-5'>Crafted with ❤️ by - Sandip</div>
          </div>
        </div>
      </div>
    </main>
  );
}

const TRANSCRIPT = {
  words: [
    { val: 'When', startTime: 5.0 },
    { val: 'I first', startTime: 5.2 },
    { val: 'received', startTime: 5.6 },
    { val: 'this', startTime: 6.1 },
    { val: 'Nobel', startTime: 6.4 },
    { val: 'Prize for', startTime: 6.6 },
    { val: 'Literature,', startTime: 7.2 },
    { val: 'I got to', startTime: 8.2 },
    { val: 'wondering', startTime: 8.5 },
    { val: 'exactly', startTime: 9.8 },
    { val: 'how', startTime: 10.5 },
    { val: 'my', startTime: 10.6 },
    { val: 'songs', startTime: 10.8 },
    { val: 'related', startTime: 11.6 },
    { val: 'to literature.', startTime: 12.6 },
    { val: 'I wanted to', startTime: 14.8 },
    { val: 'reflect on it', startTime: 15.5 },
    { val: 'and see where the', startTime: 16.36 },
    { val: 'connection was.', startTime: 17.8 },
    { val: "I'm going to try to", startTime: 18.4 },
    { val: 'articulate that', startTime: 19.25 },
    { val: 'to you', startTime: 19.8 },
    { val: 'And most likely', startTime: 20.8 },
    { val: 'it will go', startTime: 22.3 },
    { val: 'in a roundabout way,', startTime: 22.8 },
    { val: 'but I hope what', startTime: 24.2 },
    { val: 'I say', startTime: 25.8 },
    { val: 'will be worthwhile', startTime: 26.12 },
    { val: 'and purposeful.', startTime: 28.5 },
    { val: 'If I was to go back', startTime: 29.6 },
    { val: 'to the dawning of it all,', startTime: 32.3 },
    { val: 'I guess', startTime: 32.8 },
    { val: "I'd have to ", startTime: 33.4 },
    { val: 'start with Buddy Holly.', startTime: 35.2 },
    { val: 'Buddy died', startTime: 35.9 },
    { val: 'when I was', startTime: 36.4 },
    { val: 'about eighteen', startTime: 37.2 },
    { val: 'and he was', startTime: 38.1 },
    { val: 'twenty-two.', startTime: 39.9 },
    { val: 'From the moment', startTime: 40.783 },
    { val: 'I first heard him,', startTime: 42.083 },
    { val: 'I felt akin.', startTime: 43.883 },
    { val: 'I felt related,', startTime: 45.063 },
    { val: 'like he was an older brother.', startTime: 47.13 },
    { val: 'I even thought', startTime: 47.839 },
    { val: 'I resembled him.', startTime: 49.309 },
    { val: 'Buddy played', startTime: 49.609 },
    { val: 'the music that I loved', startTime: 52.109 },
    { val: '- the music', startTime: 52.409 },
    { val: 'I grew up on: ', startTime: 54.109 },
    { val: 'country western,', startTime: 55.109 },
    { val: "rock 'n' roll,", startTime: 55.609 },
    { val: 'and rhythm and blues.', startTime: 56.409 },
  ],
};
export default App;
