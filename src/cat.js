import React, { Suspense, useCallback, useEffect, useState } from 'react'
import { Color3, CreateLines, Vector3 } from '@babylonjs/core'
import { Engine, Model, Scene } from 'react-babylonjs';
import '@babylonjs/loaders';
import Liness from './Liness';
export const SceneWithSpinningBoxes = () => {

  const [vector, setVectors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [refresh, reload] = useState(false);

  let baseUrl = "http://127.0.0.1:3000"


  let vectors = [new Vector3(-.3, 1.6, .3),
    new Vector3(.3, 1.6, .3),
    new Vector3(.3, 1.6, -.3),
    new  Vector3(-.3, 1.6, -.3),
    new Vector3(-.3, 1.6, .3)]
  let newVector = []
  // const clickEvent = (e, scene) => {
  //   let { pickedPoint } = scene.pick(scene.pointerX, scene.pointerY);
  //   console.log(scene.pointerY, "poins");
  //   //  switch (e.type){
  //   //   case 1 :
  //   if (pickedPoint) {
  //     if (pickedPoint) {

  //       vectors.push(new Vector3(pickedPoint.x, pickedPoint.y, pickedPoint.z));

  //       if (vectors.length > 2) {
  //         vectors.shift()
  //         console.log(vectors, "3")
  //         const newDeals = [...vectors]; // spreading operator which doesn't mutate the array and returns new array
  //         newVector.push(newDeals)
  //         console.log(newVector, "new");
  //         // console.log(newDeals.shift())
  //         setVectors(newVector);
  //         reload(!refresh);
  //       }
  //       else if (vectors.length == 2) {
  //         console.log(vectors, "4")

  //         const newDeals = [...vectors]; // spreading operator which doesn't mutate the array and returns new array

  //         // console.log(newDeals.shift())
  //         setVectors(newDeals)
  //         reload(!refresh);
  //       }
  //     }
  //   }

  // }

  // let createLines = () => {
  //   let ret = '<>';
  //   return {
  //     for (let points of vectorsArray) {
  //       ret+=<Lin></>
  //     }
  //  ret+='</>'
  //   }
  // }


  // useEffect(() => {
  //   console.log("df")
  // }, [refresh])
  return (
    <div>
      <Engine antialias={true} adaptToDeviceRatio={true} canvasId='babylonJS' >
        <Scene >
          <arcRotateCamera name="camera1" target={Vector3.Zero()} alpha={Math.PI / 2} beta={Math.PI / 4} radius={8} />
          <hemisphericLight name='light1' intensity={0.7} direction={Vector3.Up()} />

          <Suspense>
            <Model alpha={0.5} alphaIndex={0.5} scaleToDimension={5} rootUrl={`${baseUrl}/images/`} sceneFilename='abc.obj' position={new Vector3(0, 0, 0)}  >
       
            </Model>
            
          </Suspense>
          <lines name="main" points={vectors} color={Color3.Blue()} updatable={true}>
                </lines>
          {/* {
            vector.map((x, index) => {
              console.log("Our log")
              return (
                <lines key={index} name="main" points={x} color={Color3.Blue()} updatable={true}>
                </lines>
              )
            })


          } */}
        </Scene>
      </Engine>
    </div>
  );
}

{/* {createLines()}  */ }
{/* <Liness points={vector}></Liness> */ }
{/* <Liness points={vector}></Liness> */ }