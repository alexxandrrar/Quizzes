/* @ts-ignore */
import song from '../../assets/music/song.mp3';
import { FC, useEffect } from 'react';

interface IPlaySound {
  isPlaying: boolean;
}

export const PlaySound: FC<IPlaySound> = ({ isPlaying }) => {
  useEffect(() => {
    let audio: HTMLAudioElement | null = null;

    const playAudio = async () => {
      if (audio) {
        try {
          await audio.play();
        } catch (error) {
          console.error('Error occurred while playing sound:', error);
        }
      }
    };

    const pauseAudio = () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    };

    if (isPlaying) {
      audio = new Audio(song);
      playAudio();
    } else {
      pauseAudio();
    }

    return () => {
      if (audio) {
        pauseAudio();
        audio = null;
      }
    };
  }, [isPlaying]);

  return null;
};
