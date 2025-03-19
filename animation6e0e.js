var canvas = document.querySelector('.crossroad__animation')
const canvas_size = [1920, 1080]
var renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(canvas_size[0], canvas_size[1])
var camera = new THREE.PerspectiveCamera(75,canvas_size[0] / canvas_size[1],1,1500)
camera.position.set(0, 530, 650)
camera.rotation.set(-.5, 0, 0)
var scene = new THREE.Scene()
scene.sectionActive = false
const lightGlobal = new THREE.AmbientLight(0xffffff,0.2)
scene.add(lightGlobal)
const lightPoint = new THREE.DirectionalLight(0xffffff,0.8)
lightPoint.position.set(0, -20, 100)
scene.add(lightPoint)
var mouse = new THREE.Vector2()
var raycaster = new THREE.Raycaster()
var meshGroup = new THREE.Group()
meshGroup.name = 'meshGroup'
const slash_settings = {
    name: 'slash',
    geometry: {
        x: 70,
        y: 380,
        z: 70
    },
    material: {
        color: 0xdddddd
    },
    matrix: {
        a: 1,
        b: 0.3,
        c: 0,
        d: 0,
        e: 0,
        f: 1,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 1,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 1
    },
    transform: {
        position: {
            deconstructed: {
                x: randomRange(-200, -300),
                y: randomRange(-10, 90),
                z: randomRange(-110, -10)
            },
            constructed: {
                x: -170,
                y: 190,
                z: 0
            }
        },
        rotation: {
            deconstructed: {
                x: randomRange(-3, -.2),
                y: randomRange(-3, -.2),
                z: randomRange(-3, -.2)
            },
            constructed: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    }
}
const slash_geometry = new THREE.BoxGeometry(slash_settings.geometry.x,slash_settings.geometry.y,slash_settings.geometry.z)
const slash_material = new THREE.MeshLambertMaterial(slash_settings.material)
const slash_mesh = new THREE.Mesh(slash_geometry,slash_material)
slash_mesh.name = slash_settings.name
slash_mesh.position.set(slash_settings.transform.position.deconstructed.x, slash_settings.transform.position.deconstructed.y, slash_settings.transform.position.deconstructed.z)
slash_mesh.rotation.set(slash_settings.transform.rotation.deconstructed.x, slash_settings.transform.rotation.deconstructed.y, slash_settings.transform.rotation.deconstructed.z)
const slash_matrix = new THREE.Matrix4()
slash_matrix.set(slash_settings.matrix.a, slash_settings.matrix.b, slash_settings.matrix.c, slash_settings.matrix.d, slash_settings.matrix.e, slash_settings.matrix.f, slash_settings.matrix.g, slash_settings.matrix.h, slash_settings.matrix.i, slash_settings.matrix.j, slash_settings.matrix.k, slash_settings.matrix.l, slash_settings.matrix.m, slash_settings.matrix.n, slash_settings.matrix.o, slash_settings.matrix.p)
slash_geometry.applyMatrix(slash_matrix)
meshGroup.add(slash_mesh)
const dash_settings = {
    name: 'dash',
    geometry: {
        x: 150,
        y: 50,
        z: 70
    },
    material: {
        color: 0xdddddd
    },
    matrix: {
        a: 1,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        f: 1,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 1,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 1
    },
    transform: {
        position: {
            deconstructed: {
                x: randomRange(-50, -10),
                y: randomRange(80, 180),
                z: randomRange(-50, -10)
            },
            constructed: {
                x: 0,
                y: 190,
                z: 0
            }
        },
        rotation: {
            deconstructed: {
                x: randomRange(-3, -.2),
                y: randomRange(-3, -.2),
                z: randomRange(-3, -.2)
            },
            constructed: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    }
}
const dash_geometry = new THREE.CylinderGeometry(0.8 / Math.sqrt(2),1 / Math.sqrt(2),1,4,1)
dash_geometry.rotateY(Math.PI / 4)
dash_geometry.computeFlatVertexNormals()
const dash_material = new THREE.MeshLambertMaterial(dash_settings.material)
const dash_mesh = new THREE.Mesh(dash_geometry,dash_material)
dash_mesh.scale.set(150, 50, 70)
dash_mesh.position.set(dash_settings.transform.position.deconstructed.x, dash_settings.transform.position.deconstructed.y, dash_settings.transform.position.deconstructed.z)
dash_mesh.rotation.set(dash_settings.transform.rotation.deconstructed.x, dash_settings.transform.rotation.deconstructed.y, dash_settings.transform.rotation.deconstructed.z)
dash_mesh.name = dash_settings.name
meshGroup.add(dash_mesh);
const backslash_settings = {
    name: 'backslash',
    geometry: {
        x: 70,
        y: 380,
        z: 70
    },
    material: {
        color: 0xdddddd
    },
    matrix: {
        a: 1,
        b: -0.3,
        c: 0,
        d: 0,
        e: 0,
        f: 1,
        g: 0,
        h: 0,
        i: 0,
        j: 0,
        k: 1,
        l: 0,
        m: 0,
        n: 0,
        o: 0,
        p: 1
    },
    transform: {
        position: {
            deconstructed: {
                x: randomRange(60, 160),
                y: randomRange(80, 180),
                z: randomRange(-110, -10)
            },
            constructed: {
                x: 170,
                y: 190,
                z: 0
            }
        },
        rotation: {
            deconstructed: {
                x: randomRange(-3, -.2),
                y: randomRange(-3, -.2),
                z: randomRange(-3, -.2)
            },
            constructed: {
                x: 0,
                y: 0,
                z: 0
            }
        }
    }
}
const backslash_geometry = new THREE.BoxGeometry(backslash_settings.geometry.x,backslash_settings.geometry.y,backslash_settings.geometry.z)
const backslash_material = new THREE.MeshLambertMaterial(backslash_settings.material)
const backslash_mesh = new THREE.Mesh(backslash_geometry,backslash_material)
backslash_mesh.name = backslash_settings.name
backslash_mesh.position.set(backslash_settings.transform.position.deconstructed.x, backslash_settings.transform.position.deconstructed.y, backslash_settings.transform.position.deconstructed.z)
backslash_mesh.rotation.set(backslash_settings.transform.rotation.deconstructed.x, backslash_settings.transform.rotation.deconstructed.y, backslash_settings.transform.rotation.deconstructed.z)
const backslash_matrix = new THREE.Matrix4()
backslash_matrix.set(backslash_settings.matrix.a, backslash_settings.matrix.b, backslash_settings.matrix.c, backslash_settings.matrix.d, backslash_settings.matrix.e, backslash_settings.matrix.f, backslash_settings.matrix.g, backslash_settings.matrix.h, backslash_settings.matrix.i, backslash_settings.matrix.j, backslash_settings.matrix.k, backslash_settings.matrix.l, backslash_settings.matrix.m, backslash_settings.matrix.n, backslash_settings.matrix.o, backslash_settings.matrix.p)
backslash_geometry.applyMatrix(backslash_matrix)
meshGroup.add(backslash_mesh)
scene.add(meshGroup)
if (window.innerWidth > 1000) {
    document.addEventListener('mouseenter', onDocumentMouseMove, false)
    document.addEventListener('mousemove', onDocumentMouseMove, false)
}
canvas.addEventListener('click', onDocumentMouseClick, false)
function onDocumentMouseMove(event) {
    event.preventDefault()
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
}
function onDocumentMouseClick(e) {
    onDocumentMouseMove(e)
    raycaster.setFromCamera(mouse, camera)
    if (scene.sectionActive) {
        scene.sectionActive = false
        crossroadReset()
    } else {
        const intersects = raycaster.intersectObjects(scene.children)
        if (intersects.length > 0 && intersects[0].object.type == 'news') {
            window.location.href = intersects[0].object.url
        }
    }
}
function raycasterHoverConstruction() {
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children)
    if (intersects.length > 0 && intersects[0].object.type == 'news') {
        document.body.style.cursor = 'pointer'
    } else {
        document.body.style.cursor = 'default'
    }
    if ((mouse.x >= .6 || mouse.x < -.6 || mouse.y >= .6 || mouse.y < -.6) || scene.sectionActive) {
        construct()
    } else {
        deconstruct()
    }
    meshGroup.rotation.x = (mouse.y + .4) * -1
    meshGroup.rotation.y = mouse.x * 1
}
function randomRange(min, max) {
    max = (max) ? max : min
    return Math.floor(Math.random() * (max - min + 1)) + min
}
function meshAnimCalc(from, to, speed) {
    if (from < to) {
        return ((to - from) / speed)
    } else if (from > to) {
        return ((from - to) / speed) * -1
    } else {
        return 0
    }
}
function meshAnimEval(currentValue, startValue, endValue, process) {
    const speed = 60
    if (process === 'construct') {
        currentValue = (currentValue < endValue) ? currentValue + meshAnimCalc(startValue, endValue, speed) : endValue
        return currentValue
    } else if (process === 'deconstruct') {
        currentValue = (currentValue > endValue) ? currentValue + meshAnimCalc(startValue, endValue, speed) : endValue
        return currentValue
    }
}
function construct(speed) {
    slash_mesh.position.x = meshAnimEval(slash_mesh.position.x, slash_settings.transform.position.deconstructed.x, slash_settings.transform.position.constructed.x, 'construct')
    slash_mesh.position.y = meshAnimEval(slash_mesh.position.y, slash_settings.transform.position.deconstructed.y, slash_settings.transform.position.constructed.y, 'construct')
    slash_mesh.position.z = meshAnimEval(slash_mesh.position.z, slash_settings.transform.position.deconstructed.z, slash_settings.transform.position.constructed.z, 'construct')
    slash_mesh.rotation.x = meshAnimEval(slash_mesh.rotation.x, slash_settings.transform.rotation.deconstructed.x, slash_settings.transform.rotation.constructed.x, 'construct')
    slash_mesh.rotation.y = meshAnimEval(slash_mesh.rotation.y, slash_settings.transform.rotation.deconstructed.y, slash_settings.transform.rotation.constructed.y, 'construct')
    slash_mesh.rotation.z = meshAnimEval(slash_mesh.rotation.z, slash_settings.transform.rotation.deconstructed.z, slash_settings.transform.rotation.constructed.z, 'construct')
    dash_mesh.position.x = meshAnimEval(dash_mesh.position.x, dash_settings.transform.position.deconstructed.x, dash_settings.transform.position.constructed.x, 'construct')
    dash_mesh.position.y = meshAnimEval(dash_mesh.position.y, dash_settings.transform.position.deconstructed.y, dash_settings.transform.position.constructed.y, 'construct')
    dash_mesh.position.z = meshAnimEval(dash_mesh.position.z, dash_settings.transform.position.deconstructed.z, dash_settings.transform.position.constructed.z, 'construct')
    dash_mesh.rotation.x = meshAnimEval(dash_mesh.rotation.x, dash_settings.transform.rotation.deconstructed.x, dash_settings.transform.rotation.constructed.x, 'construct')
    dash_mesh.rotation.y = meshAnimEval(dash_mesh.rotation.y, dash_settings.transform.rotation.deconstructed.y, dash_settings.transform.rotation.constructed.y, 'construct')
    dash_mesh.rotation.z = meshAnimEval(dash_mesh.rotation.z, dash_settings.transform.rotation.deconstructed.z, dash_settings.transform.rotation.constructed.z, 'construct')
    backslash_mesh.position.x = meshAnimEval(backslash_mesh.position.x, backslash_settings.transform.position.deconstructed.x, backslash_settings.transform.position.constructed.x, 'construct')
    backslash_mesh.position.y = meshAnimEval(backslash_mesh.position.y, backslash_settings.transform.position.deconstructed.y, backslash_settings.transform.position.constructed.y, 'construct')
    backslash_mesh.position.z = meshAnimEval(backslash_mesh.position.z, backslash_settings.transform.position.deconstructed.z, backslash_settings.transform.position.constructed.z, 'construct')
    backslash_mesh.rotation.x = meshAnimEval(backslash_mesh.rotation.x, backslash_settings.transform.rotation.deconstructed.x, backslash_settings.transform.rotation.constructed.x, 'construct')
    backslash_mesh.rotation.y = meshAnimEval(backslash_mesh.rotation.y, backslash_settings.transform.rotation.deconstructed.y, backslash_settings.transform.rotation.constructed.y, 'construct')
    backslash_mesh.rotation.z = meshAnimEval(backslash_mesh.rotation.z, backslash_settings.transform.rotation.deconstructed.z, backslash_settings.transform.rotation.constructed.z, 'construct')
}
function deconstruct(speed) {
    slash_mesh.position.x = meshAnimEval(slash_mesh.position.x, slash_settings.transform.position.constructed.x, slash_settings.transform.position.deconstructed.x, 'deconstruct')
    slash_mesh.position.y = meshAnimEval(slash_mesh.position.y, slash_settings.transform.position.constructed.y, slash_settings.transform.position.deconstructed.y, 'deconstruct')
    slash_mesh.position.z = meshAnimEval(slash_mesh.position.z, slash_settings.transform.position.constructed.z, slash_settings.transform.position.deconstructed.z, 'deconstruct')
    slash_mesh.rotation.x = meshAnimEval(slash_mesh.rotation.x, slash_settings.transform.rotation.constructed.x, slash_settings.transform.rotation.deconstructed.x, 'deconstruct')
    slash_mesh.rotation.y = meshAnimEval(slash_mesh.rotation.y, slash_settings.transform.rotation.constructed.y, slash_settings.transform.rotation.deconstructed.y, 'deconstruct')
    slash_mesh.rotation.z = meshAnimEval(slash_mesh.rotation.z, slash_settings.transform.rotation.constructed.z, slash_settings.transform.rotation.deconstructed.z, 'deconstruct')
    dash_mesh.position.x = meshAnimEval(dash_mesh.position.x, dash_settings.transform.position.constructed.x, dash_settings.transform.position.deconstructed.x, 'deconstruct')
    dash_mesh.position.y = meshAnimEval(dash_mesh.position.y, dash_settings.transform.position.constructed.y, dash_settings.transform.position.deconstructed.y, 'deconstruct')
    dash_mesh.position.z = meshAnimEval(dash_mesh.position.z, dash_settings.transform.position.constructed.z, dash_settings.transform.position.deconstructed.z, 'deconstruct')
    dash_mesh.rotation.x = meshAnimEval(dash_mesh.rotation.x, dash_settings.transform.rotation.constructed.x, dash_settings.transform.rotation.deconstructed.x, 'deconstruct')
    dash_mesh.rotation.y = meshAnimEval(dash_mesh.rotation.y, dash_settings.transform.rotation.constructed.y, dash_settings.transform.rotation.deconstructed.y, 'deconstruct')
    dash_mesh.rotation.z = meshAnimEval(dash_mesh.rotation.z, dash_settings.transform.rotation.constructed.z, dash_settings.transform.rotation.deconstructed.z, 'deconstruct')
    backslash_mesh.position.x = meshAnimEval(backslash_mesh.position.x, backslash_settings.transform.position.constructed.x, backslash_settings.transform.position.deconstructed.x, 'deconstruct')
    backslash_mesh.position.y = meshAnimEval(backslash_mesh.position.y, backslash_settings.transform.position.constructed.y, backslash_settings.transform.position.deconstructed.y, 'deconstruct')
    backslash_mesh.position.z = meshAnimEval(backslash_mesh.position.z, backslash_settings.transform.position.constructed.z, backslash_settings.transform.position.deconstructed.z, 'deconstruct')
    backslash_mesh.rotation.x = meshAnimEval(backslash_mesh.rotation.x, backslash_settings.transform.rotation.constructed.x, backslash_settings.transform.rotation.deconstructed.x, 'deconstruct')
    backslash_mesh.rotation.y = meshAnimEval(backslash_mesh.rotation.y, backslash_settings.transform.rotation.constructed.y, backslash_settings.transform.rotation.deconstructed.y, 'deconstruct')
    backslash_mesh.rotation.z = meshAnimEval(backslash_mesh.rotation.z, backslash_settings.transform.rotation.constructed.z, backslash_settings.transform.rotation.deconstructed.z, 'deconstruct')
}
var timeoutDelayed
function onWindowResize() {
    clearTimeout(timeoutDelayed)
    timeoutDelayed = setTimeout(function() {
        camera.aspect = canvas_size[0] / canvas_size[1]
        camera.updateProjectionMatrix()
        renderer.setSize(canvas_size[0], canvas_size[1])
    }, 200)
}
window.addEventListener('resize', onWindowResize, false)
function renderF() {
    raycasterHoverConstruction()
    renderer.render(scene, camera)
    if (window.innerWidth > 1000) {
        requestAnimationFrame(renderF)
    }
}
requestAnimationFrame(renderF)
