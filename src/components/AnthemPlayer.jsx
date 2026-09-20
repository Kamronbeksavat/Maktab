import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function AnthemPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // O'zbekiston madhiyasining ochiq va ishlaydigan audio havolasi
  const anthemUrl = "https://upload.wikimedia.org/wikipedia/commons/b/b3/National_anthem_of_Uzbekistan_%28instrumental%29.ogg";

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Audio o'ynatishda xatolik:", error);
      });
    }
  };

  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="flex items-center gap-3 bg-gray-900 border border-gray-800 px-4 py-2.5 rounded-2xl shadow-lg">
      <audio ref={audioRef} src={anthemUrl} loop />
      
      {/* O'ynatish / To'xtatish tugmasi */}
      <button 
        onClick={togglePlay}
        className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors cursor-pointer text-sm"
      >
        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        <span>{isPlaying ? "Madhiyani to'xtatish" : "O'zbekiston Madhiyasi"}</span>
      </button>

      {/* Ovozni o'chirish / yoqish tugmasi */}
      {isPlaying && (
        <button 
          onClick={toggleMute}
          className="p-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-xl transition-colors cursor-pointer"
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      )}
    </div>
  );
}