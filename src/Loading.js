import { Text } from "@react-three/drei";
import * as THREE from "three";
export default function Loading() {
  const fontURL = "./fonts/BebasNeue-Regular.ttf";

  return (
    <>
      <Text color={"black"} font={fontURL} fontSize={0.5} position={[0, 3, 0]}>
        loading...
      </Text>
    </>
  );
}
