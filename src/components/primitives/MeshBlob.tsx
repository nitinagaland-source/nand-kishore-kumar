import React from 'react';

interface MeshBlobProps {
  color1?: string;
  color2?: string;
  color3?: string;
  size?: number | string;
  className?: string;
  blur?: number;
}

export const MeshBlob: React.FC<MeshBlobProps> = ({
  color1 = 'var(--journey-a)',
  color2 = 'var(--journey-b)',
  color3,
  size = 420,
  className = '',
  blur = 80,
}) => {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={{
        width: typeof size === 'number' ? `${size}px` : size,
        height: typeof size === 'number' ? `${size}px` : size,
      }}
      aria-hidden="true"
    >
      <div
        className="relative w-full h-full"
        style={{
          filter: `blur(${blur}px)`,
          mixBlendMode: 'screen',
        }}
      >
        <div
          className="absolute inset-0 rounded-full animate-blob-1"
          style={{
            backgroundColor: color1,
            opacity: 0.65,
            width: '80%',
            height: '80%',
            top: '0%',
            left: '0%',
          }}
        />
        <div
          className="absolute inset-0 rounded-full animate-blob-2"
          style={{
            backgroundColor: color2,
            opacity: 0.75,
            width: '85%',
            height: '85%',
            bottom: '0%',
            right: '0%',
          }}
        />
        {color3 && (
          <div
            className="absolute inset-0 rounded-full animate-blob-1"
            style={{
              backgroundColor: color3,
              opacity: 0.5,
              width: '60%',
              height: '60%',
              top: '20%',
              left: '20%',
              animationDelay: '-5s',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MeshBlob;
