import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <p>Rate this:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          style={{
            cursor: "pointer",
            fontSize: "24px",
            color: star <= rating ? "#facc15" : "#64748b",
          }}
        >
          ★
        </span>
      ))}
      <p>Your Rating: {rating}</p>
    </div>
  );
}
