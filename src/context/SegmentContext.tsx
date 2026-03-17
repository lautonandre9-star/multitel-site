import React, { createContext, useContext, useState, ReactNode } from 'react';

type Segment = 'business' | 'residential';

interface SegmentContextType {
  segment: Segment;
  setSegment: (segment: Segment) => void;
}

const SegmentContext = createContext<SegmentContextType | undefined>(undefined);

export const SegmentProvider = ({ children }: { children: ReactNode }) => {
  const [segment, setSegment] = useState<Segment>('business');

  return (
    <SegmentContext.Provider value={{ segment, setSegment }}>
      {children}
    </SegmentContext.Provider>
  );
};

export const useSegment = () => {
  const context = useContext(SegmentContext);
  if (context === undefined) {
    throw new Error('useSegment must be used within a SegmentProvider');
  }
  return context;
};
