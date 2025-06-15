import React from "react";

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <div className='w-full h-[calc(100vh-62px)] bg-gray-300/100'>
      <main>
        {children}
      </main>
    </div>
  );
}