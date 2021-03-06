
//渲染器 

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 800, 500);
document.getElementsByTagName('body')[0].appendChild(renderer.domElement);


//背景色设置为灰色

renderer.setClearColor(0x808080);


//场景

var scene = new THREE.Scene();


//照相机

var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
camera.position.set(10, 10, 10);
camera.lookAt(new THREE.Vector3(0, 0, 0));
scene.add(camera);


//长方体

var cube = new THREE.Mesh(new THREE.CubeGeometry(5, 4, 2),
        new THREE.MeshLambertMaterial({
            color: 0xFFFF00,
            //wireframe: true
        })
);

scene.add(cube);


//一个生成圆环的函数，传入位置x,y,z

function mNlz(x,y,z){

var lz=new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.20,100,100),
     new THREE.MeshLambertMaterial({
            color: 0x00FFFF,
            //wireframe: true
    })
);

scene.add(lz);
lz.position.set(x, y, z);

}

//两个圆环
mNlz(2,-2,1)
mNlz(-2,-2,1)


var light = new THREE.SpotLight(0xffffff);
    light.position.set(10, 30, 20);
    scene.add(light);

//渲染

renderer.render(scene, camera);