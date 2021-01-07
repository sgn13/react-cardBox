import React, { useEffect, useState, useRef, PureComponent } from 'react';
import {Line} from "../line";

const RULER_LINE = {
  TOP:    'TOP',
  BOTTOM: 'BOTTOM',
  LEFT:   'LEFT',
}

export const Ruler = ({ node }) => {
  const [frame, setFrame] = useState();

  useEffect(() => {
    const element = document.getElementById('can');
    if (element) {
      const { left, top, height, width } = element.getBoundingClientRect();
      setFrame({ left, top, height, width})
    }
  }, []);

  const getCoordinate = (position) => {
    switch (position) {
      case RULER_LINE.TOP: {
        return {
          x0: frame.left,
          x1: frame.left + frame.width,
          y0: frame.top + node.top + window.pageYOffset,
          y1: frame.top + node.top + window.pageYOffset,
        };
      }
      case RULER_LINE.BOTTOM: {
        return {
          x0: frame.left,
          x1: frame.left + frame.width,
          y0: frame.top + node.top + window.pageYOffset + 20,
          y1: frame.top + node.top + window.pageYOffset + 20,
        };
      }
      case RULER_LINE.LEFT: {
        return {
          x0: frame.left + node.left,
          x1: frame.left + node.left,
          y0: frame.top + frame.height + window.pageYOffset,
          y1: frame.top + window.pageYOffset,
        };
      }
      default: return {};
    }
  }

  return (
    <div>
      {!!frame && !!node && (
        <>
          <Line {...getCoordinate(RULER_LINE.TOP)} />
          <Line {...getCoordinate(RULER_LINE.BOTTOM)} />
          <Line {...getCoordinate(RULER_LINE.LEFT)} />
        </>
      )}
    </div>
  )
}
