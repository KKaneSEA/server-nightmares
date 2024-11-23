import "./App.css";
import * as THREE from "three";

import Loading from "./Loading";

import { Canvas } from "@react-three/fiber";

import { Suspense } from "react";

function App() {
  return (
    <div className="container">
      <main className="main">
        <h1>SERVER NIGHTMARES</h1>
        <div>Hear your managers voice: </div>
        <div className="game-container">
          <div className="scene">
            <Canvas
              className="scene-canvas"
              camera={{ position: [0, -2.5, 10.5], fov: 50 }}
              resize={{ scroll: false }}
            >
              <Suspense
                fallback={<Loading position={[0, 0, 0]} scale={[1, 1, 1]} />}
              ></Suspense>
              <ambientLight intensity={2.1} />
              <mesh>
                <sphereGeometry />
                <meshStandardMaterial color="hotpink" />
              </mesh>
            </Canvas>
          </div>
          <div className="control-container">
            <div className="tips">Tips: $100</div>
            <div className="controls-grid">
              <button
                onClick={() => console.log("click")}
                className="grid-item1"
              >
                Table 4
              </button>
              <button
                onClick={() => console.log("click")}
                className="grid-item2"
              >
                Table 3{" "}
              </button>
              <div className="grid-item3"></div>
              <button
                onClick={() => console.log("click")}
                className="grid-item4"
              >
                Table 5
              </button>
              <button
                onClick={() => console.log("click")}
                className="grid-item5"
              >
                {" "}
                Table 2
              </button>
              <div className="grid-item6"></div>
              <button
                onClick={() => console.log("click")}
                className="grid-item7"
              >
                Table 6
              </button>
              <button
                onClick={() => console.log("click")}
                className="grid-item8"
              >
                Table 1
              </button>
              <div className="grid-item9"></div>
              <button
                onClick={() => console.log("click")}
                className="grid-item10"
              >
                Table 7
              </button>
            </div>
            <div className="table-text">Click a table to walk over there! </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
