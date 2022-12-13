import { Color3, Vector3 } from "@babylonjs/core"
import { memo, useEffect } from "react"

const GROUND_SIZE = 1000;
const validateDrag = (targetPosition) => {
    return Math.max(Math.abs(targetPosition.x), Math.abs(targetPosition.z)) <= (GROUND_SIZE / 2) - 10; // should be -15 for torus
  }
const Liness = (props) => {
  let { points } = props
    return (
console.log(props,"props")
       
            // <lines name="main" key={'key' + points._x} points={points} color={Color3.Blue()} updatable={false}>
            // </lines>
          

    );

}

export default memo(Liness)