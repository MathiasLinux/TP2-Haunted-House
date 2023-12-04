import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import GUI from 'lil-gui'

/**
 * Base
 */
// Debug
const gui = new GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Mixer
const mixer = new THREE.AnimationMixer(scene)

// Loader
const loader = new GLTFLoader();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader()

/**
 * House
 */
const house = new THREE.Group();
scene.add(house)

// Walls
const walls = new THREE.Mesh(
    new THREE.BoxGeometry(4, 2.5, 4),
    new THREE.MeshStandardMaterial({ map: textureLoader.load('/textures/bricks/color.jpg') }),
    )

walls.position.y = 2.5 / 2

walls.castShadow = true
walls.receiveShadow = true

house.add(walls)

// Roof
const roofTexture = textureLoader.load('/textures/roof/color.png')
roofTexture.wrapS = THREE.RepeatWrapping
roofTexture.wrapT = THREE.RepeatWrapping
roofTexture.repeat.x = 4
roofTexture.repeat.y = 4

const roof = new THREE.Mesh(
    new THREE.ConeGeometry(3.5, 1, 4),
    new THREE.MeshStandardMaterial({ map: roofTexture })
)

roof.position.y = 2.5 + 0.5

roof.rotation.y = Math.PI * 0.25

roof.castShadow = true
roof.receiveShadow = true

house.add(roof)

// Door
const door = new THREE.Mesh(
    new THREE.PlaneGeometry(1, 1.5),
    new THREE.MeshStandardMaterial({ map: textureLoader.load('/textures/door/color.jpg') })

)

door.position.y = 0.75 + 0.01
door.position.z = 2 + 0.01

door.castShadow = true
door.receiveShadow = true

house.add(door)

// Bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load('/textures/grass/color.jpg') })

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.6, 0.6, 0.6)
bush1.position.set(0.8, 0.1, 2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(- 0.8, 0.1, 2.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(- 1, 0.05, 2.6)

const bush5 = new THREE.Mesh(bushGeometry, bushMaterial)
bush5.scale.set(0.4, 0.4, 0.4)
bush5.position.set(- 1.2, 0.1, 2.2)

const bush6 = new THREE.Mesh(bushGeometry, bushMaterial)
bush6.scale.set(0.15, 0.15, 0.15)
bush6.position.set(- 1.6, 0.05, 2.6)

// Bush on the other side of the house
const bush7 = new THREE.Mesh(bushGeometry, bushMaterial)
bush7.scale.set(0.15, 0.15, 0.15)
bush7.position.set(0.8, 0.05, - 2.6)

const bush8 = new THREE.Mesh(bushGeometry, bushMaterial)
bush8.scale.set(0.4, 0.4, 0.4)
bush8.position.set(1.4, 0.1, - 2.2)

const bush9 = new THREE.Mesh(bushGeometry, bushMaterial)
bush9.scale.set(0.15, 0.15, 0.15)
bush9.position.set(- 0.8, 0.05, - 2.6)

const bush10 = new THREE.Mesh(bushGeometry, bushMaterial)
bush10.scale.set(0.4, 0.4, 0.4)
bush10.position.set(- 1.4, 0.1, - 2.2)

const bush11 = new THREE.Mesh(bushGeometry, bushMaterial)
bush11.scale.set(0.15, 0.15, 0.15)
bush11.position.set(- 1, 0.05, - 2.6)

const bush12 = new THREE.Mesh(bushGeometry, bushMaterial)
bush12.scale.set(0.15, 0.15, 0.15)
bush12.position.set(- 1.6, 0.05, - 2.6)

const bush13 = new THREE.Mesh(bushGeometry, bushMaterial)
bush13.scale.set(0.15, 0.15, 0.15)
bush13.position.set(1.6, 0.05, 2.6)

const bush14 = new THREE.Mesh(bushGeometry, bushMaterial)
bush14.scale.set(0.15, 0.15, 0.15)
bush14.position.set(1.6, 0.05, - 2.6)

// Bush on the sides of the house

const bush15 = new THREE.Mesh(bushGeometry, bushMaterial)
bush15.scale.set(0.15, 0.15, 0.15)
bush15.position.set(2.6, 0.05, 0.8)
bush15.rotation.y = Math.PI * 0.5

const bush16 = new THREE.Mesh(bushGeometry, bushMaterial)
bush16.scale.set(0.15, 0.15, 0.15)
bush16.position.set(2.6, 0.05, - 0.8)
bush16.rotation.y = Math.PI * 0.5

const bush17 = new THREE.Mesh(bushGeometry, bushMaterial)
bush17.scale.set(0.35, 0.75, 0.45)
bush17.position.set(- 2.6, 0.05, 0.8)
bush17.rotation.y = Math.PI * 0.5

const bush18 = new THREE.Mesh(bushGeometry, bushMaterial)
bush18.scale.set(0.15, 0.15, 0.15)
bush18.position.set(- 2.6, 0.05, - 0.8)
bush18.rotation.y = Math.PI * 0.5

const bush19 = new THREE.Mesh(bushGeometry, bushMaterial)
bush19.scale.set(0.15, 0.15, 0.15)
bush19.position.set(2.6, 0.05, 0.8)

const bush20 = new THREE.Mesh(bushGeometry, bushMaterial)
bush20.scale.set(0.45, 1.15, 0.55)
bush20.position.set(2.6, 0.05, - 0.8)

bush1.castShadow = true
bush1.receiveShadow = true
bush2.castShadow = true
bush2.receiveShadow = true
bush3.castShadow = true
bush3.receiveShadow = true
bush4.castShadow = true
bush4.receiveShadow = true
bush5.castShadow = true
bush5.receiveShadow = true
bush6.castShadow = true
bush6.receiveShadow = true
bush7.castShadow = true
bush7.receiveShadow = true
bush8.castShadow = true
bush8.receiveShadow = true
bush9.castShadow = true
bush9.receiveShadow = true
bush10.castShadow = true
bush10.receiveShadow = true
bush11.castShadow = true
bush11.receiveShadow = true
bush12.castShadow = true
bush12.receiveShadow = true
bush13.castShadow = true
bush13.receiveShadow = true
bush14.castShadow = true
bush14.receiveShadow = true
bush15.castShadow = true
bush15.receiveShadow = true
bush16.castShadow = true
bush16.receiveShadow = true
bush17.castShadow = true
bush17.receiveShadow = true
bush18.castShadow = true
bush18.receiveShadow = true
bush19.castShadow = true
bush19.receiveShadow = true
bush20.castShadow = true
bush20.receiveShadow = true

house.add(bush1, bush2, bush3, bush4, bush5, bush6, bush7, bush8, bush9, bush10, bush11, bush12, bush13, bush14, bush15, bush16, bush17, bush18, bush19, bush20)

// The car

// Import the car
loader.load('/models/107.glb', function (glb) {
    const car = glb.scene.children[0]
    car.scale.set(0.7, 0.7, 0.7)
    car.position.set(6, 0.2, - 1.5)
    car.rotation.z = Math.PI * - 0.5
    car.castShadow = true   
    car.receiveShadow = true
    // Add lights to the car
    const carLight1 = new THREE.PointLight('#ff6d35', 10, 7)
    carLight1.position.set(1.6, -1.4, 1)
    carLight1.castShadow = true
    car.add(carLight1)
    const carLight2 = new THREE.PointLight('#ff6d35', 10, 7)
    carLight2.position.set(1.6, 0.7, 1)
    carLight2.castShadow = true
    car.add(carLight2)

    // Add the pointLightHelper
    // const pointLightHelper = new THREE.PointLightHelper(carLight2, 1)
    // scene.add(pointLightHelper)


    scene.add(car)
})

// Graves stones
const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({ map: textureLoader.load('/textures/tomb/color.png')})

const graveColliders = [] // Array to store grave colliders

for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 6
    const x = Math.sin(angle) * radius
    const z = Math.cos(angle) * radius

    // Create the mesh
    const grave = new THREE.Mesh(graveGeometry, graveMaterial)

    // Enable shadows
    grave.castShadow = true
    grave.receiveShadow = true


    // Position
    grave.position.set(x, 0.3, z)
    grave.rotation.y = (Math.random() - 0.5) * 0.4
    grave.rotation.z = (Math.random() - 0.5) * 0.4

    // Check for collisions with existing graves
    let isColliding = false
    for (const collider of graveColliders) {
        if (grave.position.distanceTo(collider.position) < 1) {
            isColliding = true
            break
        }
    }
    
    // Check for close collisions with the house
    if (grave.position.distanceTo(house.position) < 1.5) {
        isColliding = true
    }

    // Check for close collisions with the car
    if (grave.position.distanceTo(new THREE.Vector3(5, 0.2, - 1.5)) < 2.5) {
        isColliding = true
    }

    // Add to the graves container if not colliding
    if (!isColliding) {
        graves.add(grave)
        graveColliders.push(grave)
    }
}

// Ghosts

const ghostGrp = new THREE.Group()

function addRandomGhost(){
    loader.load('/models/freddy.glb', function (glb) {
        const ghost = glb.scene.children[0]
        ghost.scale.set(0.5, 0.5, 0.5)
        // spawn the ghost at a random position in the whole scene
        const randomX = Math.random() * 10 - 5
        const randomY = Math.random() * 10 - 5
        const randomZ = Math.random() * 10 - 5

        ghost.position.set(randomX, randomY, randomZ)

        // Assign each ghost a unique speed and direction
        ghost.speed = Math.random() * 0.01
        ghost.directionX = Math.random() * Math.PI * 2;
        ghost.directionY = Math.random() * Math.PI * 2;
        ghost.directionZ = Math.random() * Math.PI * 2;

        // Mixers
        ghost.mixer = new THREE.AnimationMixer(ghost)
        const animation = glb.animations[0]
        const action = ghost.mixer.clipAction(animation)
        action.play()

        // Shadows
        ghost.castShadow = true
        ghost.receiveShadow = true

        ghostGrp.add(ghost)

})}

scene.add(ghostGrp)




// Floor
const textureFloor = textureLoader.load('/textures/grass/color.jpg')
textureFloor.wrapS = THREE.RepeatWrapping;
textureFloor.wrapT = THREE.RepeatWrapping;

textureFloor.repeat.x = 8
textureFloor.repeat.y = 8

const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ map: textureFloor})
)
floor.rotation.x = - Math.PI * 0.5
floor.position.y = 0
floor.receiveShadow = true
scene.add(floor)

/**
 * Lights
 */
// Ambient light
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.2)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

// Directional light
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.3)
moonLight.position.set(4, 5, - 2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(- 5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(- 5).max(5).step(0.001)
scene.add(moonLight)

// Door light
const doorLight = new THREE.PointLight('#ff6d35', 1, 7)
doorLight.position.set(0, 2.0, 2.5)
doorLight.castShadow = true
house.add(doorLight)

/**
 * Shadows
 */

// Directional light shadow
moonLight.castShadow = true
moonLight.shadow.mapSize.width = 256
moonLight.shadow.mapSize.height = 256
moonLight.shadow.camera.far = 15

// Door light shadow
doorLight.castShadow = true
doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

// Ghosts shadows
ghostGrp.children.forEach(ghost => {
    ghost.castShadow = true
    ghost.receiveShadow = true
    ghost.shadow.mapSize.width = 256
    ghost.shadow.mapSize.height = 256
    ghost.shadow.camera.far = 7
})

// Floor shadow
floor.receiveShadow = true


/**
 * Fog
 */

const fog = new THREE.Fog('#262837', 1, 10)
scene.fog = fog

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor('#262837')
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 5
camera.position.y = 2
camera.position.z = 6
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Shadows
renderer.shadowMap.enabled = true;

// Shadow map type
renderer.shadowMap.type = THREE.PCFSoftShadowMap

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Add random ghosts
    if (Math.random() < 0.01) {
        addRandomGhost()
    }

    // If more than 10 ghosts, remove the first one
    if (ghostGrp.children.length > 10) {
        const firstGhost = ghostGrp.children[0]
        ghostGrp.remove(firstGhost)
    }

    // Animate ghosts
    ghostGrp.children.forEach(ghost => {
        // Move the ghost arround the scene in a random way each ghost has a different speed and direction
        ghost.position.x += ghost.speed * Math.cos(ghost.directionX);
        ghost.position.y += ghost.speed * Math.sin(ghost.directionY);
        ghost.position.z += ghost.speed * Math.sin(ghost.directionZ);
        // Make the ghost rotate
        ghost.rotation.z += 0.01
        ghost.rotation.x += 0.01
        ghost.rotation.y += 0.01

        // Make the ghost go up and down
        ghost.position.y = Math.sin(elapsedTime) * 0.3 + 0.8

        // Verify that the ghost is not going out of the scene
        if (ghost.position.x > 5) {
            ghost.position.x = - 5
        }

        if (ghost.position.x < - 5) {
            ghost.position.x = 5
        }

        if (ghost.position.z > 5) {
            ghost.position.z = - 5
        }

        if (ghost.position.z < - 5) {
            ghost.position.z = 5
        }

        // Animate the model itself
        if (ghost.mixer) {
            ghost.mixer.update(clock.getDelta())
        }
    })

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()