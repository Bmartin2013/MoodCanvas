import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { drawComposition, setup } from './setup';

const P5Sketch = ({ emotions, options, isGifSaved, setIsGifSaved, sketchName }) => {
  const sketchRef = useRef();

  useEffect(() => {
    const sketch = (p) => {
      p.setup = () => setup(p, isGifSaved, sketchName);

      p.draw = () => {
        drawComposition(p, emotions, options)
      }

    };

    const myP5 = new p5(sketch, sketchRef.current);

    // Cleanup on unmount
    return () => {
      myP5.remove();
      setIsGifSaved(false);
    };
  }, [isGifSaved]);

  return <div ref={sketchRef}></div>;
};




export default P5Sketch;