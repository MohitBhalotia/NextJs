"use client";

export default function ProductButton({price}) {
  return (
    <div>
      <button
        onClick={() => {
          console.log(price);
        }}
      >
        Click Me
      </button>
    </div>
  );
}
