import React, { useRef, useEffect } from 'react';
import p5 from 'p5';
import { drawComposition, setup } from './setup';

const P5Sketch = ({emotions, options}) => {
  const sketchRef = useRef();

  useEffect(() => {

    console.log(options);
    const sketch = (p) => {
      p.setup = () => setup(p);

      p.draw = () => {
        drawComposition(p,emotions, options)
      }

    };

    const myP5 = new p5(sketch, sketchRef.current);

    // Cleanup on unmount
    return () => {
      myP5.remove();
    };
  }, []);

  return <div ref={sketchRef}></div>;
};




export default P5Sketch;