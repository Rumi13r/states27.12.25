import { useState } from "react";

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="component-card">
      <h2>Показване на съобщение</h2>

      {isVisible && <p>Здравейте, уважаеми колеги, днес няма работа.</p>}

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Скрий" : "Покажи"}
      </button>
    </div>
  );
};

export default ToggleMessage;
