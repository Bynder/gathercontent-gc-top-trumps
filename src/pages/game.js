import React from 'react';

export default function Game({ location }) {
  return <div>{location?.state?.name ?? 'no name'}</div>
}
