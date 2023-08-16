const ArrowIcon = ({ size = "26", color = "currentColor" }) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={color}
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <path
        d="M5 12H19M19 12L13 6M19 12L13 18"
        stroke="#000000"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </svg>
  );
};

export default ArrowIcon;
