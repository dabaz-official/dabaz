export default function GridBackground() {
  const grid = [10, 10];
  
  return (
    <svg
      fill="none"
      viewBox="0 0 935 425"
      className="absolute -top-14 -z-10"
      id="dabaz-grid"
      style={{
        maskImage: "linear-gradient(black, transparent)",
      }}
    >
      <defs>
        <path
          fillOpacity="1"
          d="M893.826 718.5C946.527 627.22 967.649 521.106 953.918 416.602C940.188 312.099 892.372 215.042 817.881 140.473C743.39 65.9042 646.384 17.9869 541.895 4.14716C437.406 -9.69254 331.27 11.3182 239.935 63.9233C148.599 116.528 77.1648 197.79 36.702 295.116C-3.76076 392.441 -10.9926 500.395 16.1274 602.247C43.2473 704.1 103.205 794.164 186.707 858.481C270.21 922.799 372.596 957.778 477.997 957.999L479 479L893.826 718.5Z"
        />
      </defs>
      <g className="dabaz-grid-group">
        {[...Array(grid[0])].map((_, i) => {
          return [...Array(grid[1])].map((_, j) => {
            return (
              <use
                x={j * 32}
                y={i * 32 + 10}
                fill="currentColor"
                href="#dabaz-icon"
                opacity=".2"
                className="dabaz-grid-item"
                d="M893.826 718.5C946.527 627.22 967.649 521.106 953.918 416.602C940.188 312.099 892.372 215.042 817.881 140.473C743.39 65.9042 646.384 17.9869 541.895 4.14716C437.406 -9.69254 331.27 11.3182 239.935 63.9233C148.599 116.528 77.1648 197.79 36.702 295.116C-3.76076 392.441 -10.9926 500.395 16.1274 602.247C43.2473 704.1 103.205 794.164 186.707 858.481C270.21 922.799 372.596 957.778 477.997 957.999L479 479L893.826 718.5Z"
                key={i}
              />
            );
          });
        })};
      </g>
    </svg>
  );
};