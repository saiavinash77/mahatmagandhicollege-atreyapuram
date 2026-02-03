
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-orange-800 via-orange-700 to-amber-800 min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/30 to-amber-900/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(251,146,60,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(245,158,11,0.4),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
          <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Sparkles className="h-8 w-8 text-amber-300 animate-pulse mr-2" />
                <span className="text-amber-200 font-semibold">Excellence Since 1983</span>
                <Sparkles className="h-8 w-8 text-amber-300 animate-pulse ml-2" />
              </div>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl drop-shadow-lg">
                <span className="block animate-fade-in">Mahatma Gandhi</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-orange-200 to-yellow-200 animate-fade-in">
                  Degree & Junior College
                </span>
              </h1>
              <p className="mt-3 text-base text-white/90 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 drop-shadow-md">
                Founded in 1983 under the visionary leadership of <strong>P.S Raju Garu</strong>, nurturing young minds for a brighter future through quality education and values inspired by Mahatma Gandhi's principles.
              </p>
              <div className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 border-0">
                  Explore Courses 
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button className="w-full sm:w-auto bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/30 font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                  About Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full College Image Section */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-[55%] flex items-center justify-center p-4 lg:p-0">
        <div className="relative h-80 sm:h-[450px] md:h-[550px] lg:h-full w-full">
          {/* Golden orange frame effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-amber-500/10 to-orange-600/20 rounded-l-3xl"></div>
          <div className="absolute inset-0 border-l-4 border-t-4 border-b-4 border-amber-400/40 rounded-l-3xl"></div>
          
          {/* Main image container - full display */}
          <div className="relative h-full w-full rounded-l-3xl overflow-hidden shadow-2xl">
            <img
              className="h-full w-full object-contain lg:object-cover bg-orange-900/50"
              src="/lovable-uploads/688d0d39-973d-44b2-95da-ed63a789eb4b.png"
              alt="Mahatma Gandhi College Campus - Founded 1983 by P.S Raju Garu"
            />
            {/* Subtle overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-orange-900/30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 via-transparent to-transparent"></div>
            
            {/* Founder Legacy badge */}
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-xl shadow-xl border-l-4 border-orange-500">
              <p className="text-orange-800 font-bold text-lg">Founded 1983</p>
              <p className="text-orange-700 text-sm font-semibold">By P.S Raju Garu</p>
              <p className="text-orange-600 text-xs">Secretary & Correspondent</p>
            </div>
          </div>
          
          {/* Decorative corner elements */}
          <div className="absolute top-4 left-4 w-16 h-16 border-t-4 border-l-4 border-amber-400/60 rounded-tl-2xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-amber-400/60 rounded-bl-2xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
