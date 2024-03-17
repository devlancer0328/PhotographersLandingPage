import React, { useState } from 'react';

const CurrentYear = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  return (
    <span>{year}</span>
  )
}

export default CurrentYear