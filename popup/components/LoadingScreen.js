import React, { Component } from 'react';
import * as THREE from 'three';


class LoadingScreen extends Component {

  componentDidMount() {
    const renderer = new THREE.WebGLRenderer( { alpha: true } );
    document.getElementById("loadingImage").appendChild(renderer.domElement);
    renderer.setSize( 150, 150 );
    renderer.setClearColor( 0x000000, 0 );
    this.renderer = renderer
    
    this.createObject();
  }

  createObject = () => {
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, 150/150, 0.1, 1000 );

    // let geometry = new THREE.BoxGeometry( 1, 1, 1 );
    // let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    // let cube = new THREE.Mesh( geometry, material );
    // scene.add( cube );

    var geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
    var material = new THREE.MeshLambertMaterial( { color: 0x680000 } );
    var torusKnot = new THREE.Mesh( geometry, material );
    scene.add( torusKnot );

    var light = new THREE.PointLight( 0xff0000, 1, 100 );
    light.position.set( 0, 0, 20 );
    scene.add( light );

    var ambientLight = new THREE.AmbientLight( 0x404040, 7 ); // soft white light
    scene.add( ambientLight );

    this.scene = scene
    this.camera = camera
    // this.cube = cube
    this.torusKnot = torusKnot

    
    camera.position.z = 50;

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  };

  stop() {
    cancelAnimationFrame(this.frameId)
  };

  start = () => {
    console.log('started')
    if (!this.frameId) {
      this.frameId = requestAnimationFrame( this.animate )
    }
  };

  animate = () => {
    this.torusKnot.rotation.x += 0.01;
    this.torusKnot.rotation.y += 0.02;

    this.renderScene()
    this.frameId = requestAnimationFrame( this.animate );
  };

  renderScene = () => {
    // console.log('rendering')
    this.renderer.render(this.scene, this.camera);
  }

  render() {
    return (
      <div className='loadingScreen'>
        <div className='loadingInfo'>
          <div ref={(mount) => {this.mount = mount}} id="loadingImage"></div>
          <p className='loadingText'>...Loading...</p>
          <button className="navButton" onClick={this.props.cancelLogin}>Cancel</button>
        </div>
      </div>
    )
  }
}

export default LoadingScreen;

// var loader = new THREE.FontLoader();

// loader.load( 'fonts/helvetiker_regular.typeface.json', function ( font ) {

// 	var geometry = new THREE.TextGeometry( 'Hello three.js!', {
// 		font: font,
// 		size: 80,
// 		height: 5,
// 		curveSegments: 12,
// 		bevelEnabled: true,
// 		bevelThickness: 10,
// 		bevelSize: 8,
// 		bevelSegments: 5
// 	} );
// } );