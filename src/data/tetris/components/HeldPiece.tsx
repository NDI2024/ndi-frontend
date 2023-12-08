import React from 'react';
import PieceView from 'data/tetris/components/PieceView';
import { Context } from 'data/tetris/context';

export default function HeldPiece(): JSX.Element {
  const { heldPiece } = React.useContext(Context);
  return <PieceView piece={heldPiece?.piece} />;
}
