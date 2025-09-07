import { motion} from "motion/react";
const MatrixBackground = () => {
  const columns = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    chars: Array.from({ length: 20 }, () =>
      String.fromCharCode(0x30a0 + Math.random() * 96),
    ),
    delay: Math.random() * 2,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-10">
      {columns.map((column, i) => (
        <div
          key={column.id}
          className="absolute top-0 text-cyan-400 text-sm font-mono"
          style={{ left: `${i * 5}%` }}
        >
          {column.chars.map((char, j) => (
            <motion.div
              key={j}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                color: ["#00ffff", "#0080ff", "#00ffff"],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: column.delay + j * 0.1,
                repeatDelay: 3,
              }}
            >
              {char}
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  );
};

const DataFlowBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
      {/* Horizontal data streams */}
      {Array.from({ length: 5 }, (_, i) => (
        <div
          key={`h-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          style={{
            top: `${20 + i * 20}%`,
            left: 0,
            right: 0,
          }}
        >
          <motion.div
            className="h-full w-20 bg-gradient-to-r from-cyan-400 to-blue-500"
            initial={{ x: "-100px" }}
            animate={{ x: "calc(100vw + 100px)" }}
            transition={{
              duration: Math.random() * 3 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        </div>
      ))}

      {/* Vertical data streams */}
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={`v-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-blue-400 to-transparent"
          style={{
            left: `${25 + i * 25}%`,
            top: 0,
            bottom: 0,
          }}
        >
          <motion.div
            className="w-full h-16 bg-gradient-to-b from-blue-400 to-cyan-500"
            initial={{ y: "-100px" }}
            animate={{ y: "calc(100vh + 100px)" }}
            transition={{
              duration: Math.random() * 4 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          />
        </div>
      ))}

      {/* Data nodes */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const CircuitBoardBackground = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-15">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <pattern
            id="circuitPattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Horizontal traces */}
            <motion.line
              x1="20"
              y1="50"
              x2="180"
              y2="50"
              stroke="#00ffff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.line
              x1="20"
              y1="150"
              x2="180"
              y2="150"
              stroke="#0080ff"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 0.5,
              }}
            />

            {/* Vertical traces */}
            <motion.line
              x1="60"
              y1="20"
              x2="60"
              y2="180"
              stroke="#00ffff"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
              }}
            />
            <motion.line
              x1="140"
              y1="20"
              x2="140"
              y2="180"
              stroke="#0080ff"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1.5,
              }}
            />

            {/* Circuit nodes */}
            <motion.circle
              cx="60"
              cy="50"
              r="4"
              fill="#00ffff"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.circle
              cx="140"
              cy="150"
              r="3"
              fill="#0080ff"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 1,
              }}
            />
            <motion.rect
              x="138"
              y="48"
              width="4"
              height="4"
              fill="#00ffff"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
              }}
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#circuitPattern)"
        />
      </svg>
    </div>
  );
};

const HexagonalBackground = () => {
  const hexagons = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: (i % 6) * 120 + (Math.floor(i / 6) % 2) * 60,
    y: Math.floor(i / 6) * 100,
    delay: Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-10">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <polygon
            id="hexagon"
            points="50,0 93.3,25 93.3,75 50,100 6.7,75 6.7,25"
            fill="none"
            stroke="#00ffff"
            strokeWidth="1"
          />
        </defs>

        {hexagons.map((hex) => (
          <motion.use
            key={hex.id}
            href="#hexagon"
            x={hex.x}
            y={hex.y}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0, 1, 0],
              stroke: ["#00ffff", "#0080ff", "#00ffff"],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: hex.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const NeuralNetworkBackground = () => {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    connections: Math.floor(Math.random() * 3) + 1,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden opacity-20">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <radialGradient
            id="nodeGradient"
            cx="50%"
            cy="50%"
            r="50%"
          >
            <stop
              offset="0%"
              stopColor="#00ffff"
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor="#0080ff"
              stopOpacity="0.2"
            />
          </radialGradient>
          <linearGradient
            id="connectionGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#00ffff"
              stopOpacity="0.3"
            />
            <stop
              offset="50%"
              stopColor="#0080ff"
              stopOpacity="0.1"
            />
            <stop
              offset="100%"
              stopColor="#00ffff"
              stopOpacity="0.3"
            />
          </linearGradient>
        </defs>

        {/* Connections */}
        {nodes.map((node, i) =>
          nodes
            .slice(i + 1, i + node.connections + 1)
            .map((targetNode, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={`${node.x}%`}
                y1={`${node.y}%`}
                x2={`${targetNode.x}%`}
                y2={`${targetNode.y}%`}
                stroke="url(#connectionGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            )),
        )}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <motion.circle
            key={i}
            cx={`${node.x}%`}
            cy={`${node.y}%`}
            r="2"
            fill="url(#nodeGradient)"
            initial={{ scale: 0 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

const AnimatedBackground = ({
  theme = "neural",
}: {
  theme?:
    | "neural"
    | "circuit"
    | "hexagon"
    | "dataflow"
    | "matrix";
}) => {
  switch (theme) {
    case "circuit":
      return <CircuitBoardBackground />;
    case "hexagon":
      return <HexagonalBackground />;
    case "dataflow":
      return <DataFlowBackground />;
    case "matrix":
      return <MatrixBackground />;
    default:
      return <NeuralNetworkBackground />;
  }
};

export default AnimatedBackground;