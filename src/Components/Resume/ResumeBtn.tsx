import { useState } from 'react';
import { Download } from 'lucide-react';

export default function ResumeDownloadButton() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const driveLink = "https://drive.google.com/file/d/1M5gSwBXl8Nf4dwZjdpP14SSiu2upcl_G/view?usp=drive_link";
  
  const handleDownload = () => {
    const fileId = driveLink.match(/\/d\/(.+?)\//)?.[1];
    if (fileId) {
      window.open(`https://drive.google.com/uc?export=download&id=${fileId}`, '_blank');
    } else {
      window.open(driveLink, '_blank');
    }
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={handleDownload}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative overflow-hidden px-4 py-6 bg-gray-800 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        style={{
          background: 'transparent'
        }}
      >
        <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="8"
            ry="8"
            fill="none"
            stroke={isHovered ? '#22c55e' : '#ef4444'}
            strokeWidth="3"
            strokeDasharray="40 210"
            strokeDashoffset="0"
            filter={`drop-shadow(0 0 ${isHovered ? '20px' : '15px'} ${isHovered ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)'}) drop-shadow(0 0 ${isHovered ? '40px' : '35px'} ${isHovered ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)'}) drop-shadow(0 0 ${isHovered ? '60px' : '50px'} ${isHovered ? 'rgba(34, 197, 94, 0.5)' : 'rgba(239, 68, 68, 0.5)'})`}
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-250"
              dur={isHovered ? "2s" : "3s"}
              repeatCount="indefinite"
            />
          </rect>
        </svg>
        <div className="relative flex items-center justify-center px-15">
          <span
            className={`absolute transition-all duration-300 ease-out ${
              isHovered 
                ? 'translate-x-16 opacity-0' 
                : 'translate-x-0 opacity-100'
            }`}
          >
            Resume
          </span>
          <span
            className={`absolute flex items-center space-x-2 transition-all duration-300 ease-out ${
              isHovered 
                ? 'translate-x-0 opacity-100' 
                : '-translate-x-16 opacity-0'
            }`}
          >
            <Download className="w-5 h-5" />
            <span>Download</span>
          </span>
        </div>
      </button>

      <button
        style={{
          position: 'relative'
        }}
      />
    </div>
  );
}