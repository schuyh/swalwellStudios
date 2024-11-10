import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight*4, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer( { alpha: true, antialias: true } );
renderer.setSize( window.innerWidth, window.innerHeight/4);
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusGeometry( 10.5, 4.2, 8.4, 21 ); 
const material = new THREE.MeshBasicMaterial( { color: 0x3e6b98, wireframe: true } ); 
const torus = new THREE.Mesh( geometry, material ); 
scene.add( torus );

camera.position.z = 21;

function animate() {
    torus.rotation.z -= 0.0042;
	renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );