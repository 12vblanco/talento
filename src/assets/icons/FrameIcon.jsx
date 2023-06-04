const FrameIcon = ({ size = "64", color = "currentColor" }) => {
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
      <path d="M21 14v-11h-11v-3h-7v3h-3v2h3v16h16v3h2v-3h3v-7h-3zm-11-9h9v9h-9v-9zm12 14h-17v-17h3v1h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h-2v1h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h2v2h1v-2h1v3z" />
    </svg>
  );
};

export default FrameIcon;
