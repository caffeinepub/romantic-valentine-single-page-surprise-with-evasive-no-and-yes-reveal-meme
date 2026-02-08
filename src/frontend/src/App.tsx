import { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';

export default function App() {
  const [showReveal, setShowReveal] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Initialize No button position on mount
  useEffect(() => {
    if (noButtonRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      setNoButtonPosition({
        x: containerRect.width / 2 + 80,
        y: containerRect.height / 2 - buttonRect.height / 2
      });
    }
  }, []);

  const moveNoButton = () => {
    if (!containerRef.current || !noButtonRef.current) return;

    const container = containerRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();

    // Calculate safe boundaries (keep button fully visible)
    const maxX = container.width - button.width - 20;
    const maxY = container.height - button.height - 20;
    const minX = 20;
    const minY = 20;

    // Generate random position within bounds
    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoButtonPosition({ x: newX, y: newY });
  };

  const handleYesClick = () => {
    setShowReveal(true);
  };

  if (showReveal) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
        <div className="max-w-3xl w-full text-center space-y-8 animate-in fade-in duration-700">
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500 animate-pulse delay-100" />
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse delay-200" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-rose-600 font-serif">
              I knew it! 💕
            </h1>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-4 border-pink-200">
            <img
              src="/assets/WhatsApp Image 2026-02-07 at 8.14.44 PM.jpeg"
              alt="Valentine meme"
              className="w-full rounded-2xl shadow-lg mb-6"
            />
            <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-medium">
              you rejected me 11 years ago today for the first time and look at you now wanting to have babies with me 🥰{' '}
            </p>
          </div>

          <div className="flex justify-center gap-2 pt-4">
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
            <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
            <Heart className="w-6 h-6 text-pink-400 fill-pink-400" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pink-50 via-white to-rose-50">
      <div className="max-w-2xl w-full text-center space-y-12">
        <div className="space-y-6 animate-in fade-in slide-in-from-top duration-700">
          <div className="flex justify-center gap-3">
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-20 h-20 text-pink-500 fill-pink-500 animate-pulse delay-100" />
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse delay-200" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-rose-600 leading-tight font-serif px-4">
            Chimpu will you be my Valentine?
          </h1>
        </div>

        <div
          ref={containerRef}
          className="relative h-64 md:h-80 flex items-center justify-center"
        >
          {/* Yes Button - Static position */}
          <button
            onClick={handleYesClick}
            className="absolute left-1/2 top-1/2 -translate-x-[calc(50%+100px)] -translate-y-1/2 
                     bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 
                     text-white font-bold text-2xl md:text-3xl px-12 md:px-16 py-6 md:py-8 
                     rounded-full shadow-2xl hover:shadow-pink-300 
                     transform hover:scale-110 transition-all duration-300 
                     active:scale-95 border-4 border-white
                     touch-manipulation min-w-[140px] md:min-w-[180px]"
          >
            Yes! 💕
          </button>

          {/* No Button - Dynamic position with evasive behavior */}
          <button
            ref={noButtonRef}
            onMouseEnter={moveNoButton}
            onTouchStart={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            onPointerDown={(e) => {
              if (e.pointerType === 'touch') {
                e.preventDefault();
                moveNoButton();
              }
            }}
            onClick={(e) => {
              e.preventDefault();
              moveNoButton();
            }}
            style={{
              position: 'absolute',
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease-out'
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold 
                     text-xl md:text-2xl px-10 md:px-12 py-5 md:py-6 
                     rounded-full shadow-lg
                     border-4 border-white
                     touch-manipulation min-w-[120px] md:min-w-[150px]
                     cursor-pointer"
          >
            No
          </button>
        </div>

        <div className="flex justify-center gap-2 pt-8 animate-in fade-in delay-300">
          <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
          <Heart className="w-6 h-6 text-rose-300 fill-rose-300" />
          <Heart className="w-5 h-5 text-pink-300 fill-pink-300" />
        </div>
      </div>

      <footer className="fixed bottom-4 left-0 right-0 text-center text-sm text-gray-500">
        © 2026. Built with <Heart className="inline w-4 h-4 text-rose-400 fill-rose-400" /> using{' '}
        <a href="https://caffeine.ai" target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors">
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
