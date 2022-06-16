import React, { useEffect, useState } from 'react';

function Toggler({ id, icons, toggle }) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    toggle(isDark);
  }, [isDark]);

  return (
    <div className={`toggle ${id}`}>
      <input
        type="checkbox"
        id={id}
        checked={isDark}
        onChange={(e) => setIsDark(e.target.checked)}
      />
      <label htmlFor={id}>{icons}</label>
    </div>
  );
}

export default Toggler;
