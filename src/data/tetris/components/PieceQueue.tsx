import React from 'react';
import PieceView from 'data/tetris/components/PieceView';
import { Context } from 'data/tetris/context';

export default function PieceQueue(): JSX.Element {
  const { queue } = React.useContext(Context);
  return (
    <div>
      {queue.queue.map((piece, i) => (
        <div className="mb-1">
          <PieceView piece={piece} key={i} />
        </div>
      ))}
    </div>
  );
}
