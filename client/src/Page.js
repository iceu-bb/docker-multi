import React from 'react';
import { Link } from 'react-router-dom';

export default function Page() {
  return (
    <div>
      I'm some other page
      <Link to='/'>Go back Home</Link>
    </div>
  );
}
