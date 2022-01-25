import React, { useState } from 'react';

//TODO: Sort captured pieces by value

export default function CapturedPieceContainer({capturedPieces}){

  const pieceValues = {
    "queen": 9,
    "rook": 5,
    "bishop": 3.5,
    "knight": 3,
    "pawn": 1
  }

  const sortedPieces = capturedPieces.sort(function(a, b){
    return pieceValues[b.type] - pieceValues[a.type] 
  })

  console.log(sortedPieces)
  return (
    <div
      className="captured-pieces">
      {sortedPieces.map((piece, index) => 
        <div key={index}>{piece.symbol}
        </div>)}
    </div>)
}