// Selecting the sidebar and buttons
const sidebar = document.querySelector(".sidebar");
const sidebarOpenBtn = document.querySelector("#sidebar-open");
const sidebarCloseBtn = document.querySelector("#sidebar-close");
const sidebarLockBtn = document.querySelector("#lock-icon");

// Function to toggle the lock state of the sidebar
const toggleLock = () => {
  sidebar.classList.toggle("locked");
  // If the sidebar is not locked
  if (!sidebar.classList.contains("locked")) {
    sidebar.classList.add("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-alt", "bx-lock-open-alt");
  } else {
    sidebar.classList.remove("hoverable");
    sidebarLockBtn.classList.replace("bx-lock-open-alt", "bx-lock-alt");
  }
};

// Function to hide the sidebar when the mouse leaves
const hideSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.add("close");
  }
};

// Function to show the sidebar when the mouse enter
const showSidebar = () => {
  if (sidebar.classList.contains("hoverable")) {
    sidebar.classList.remove("close");
  }
};

// Function to show and hide the sidebar
const toggleSidebar = () => {
  sidebar.classList.toggle("close");
};

// If the window width is less than 800px, close the sidebar and remove hoverability and lock
if (window.innerWidth < 800) {
  sidebar.classList.add("close");
  sidebar.classList.remove("locked");
  sidebar.classList.remove("hoverable");
}

// Adding event listeners to buttons and sidebar for the corresponding actions
sidebarLockBtn.addEventListener("click", toggleLock);
sidebar.addEventListener("mouseleave", hideSidebar);
sidebar.addEventListener("mouseenter", showSidebar);
sidebarOpenBtn.addEventListener("click", toggleSidebar);
sidebarCloseBtn.addEventListener("click", toggleSidebar);
// examples
// https://threejs.org/examples/?q=particle#webgl_points_billboards

let camera
let scene
let renderer
let material
let mouseX = 0
let mouseY = 0
let windowHalfX = window.innerWidth / 2
let windowHalfY = window.innerHeight / 2

init()
animate()

function init () {
  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 5, 2000)
  camera.position.z = 500

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0000ff, 0.001)

  const geometry = new THREE.BufferGeometry()
  const vertices = []
  const size = 2000

  for ( let i = 0; i < 20000; i ++ ) {
    const x = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const y = (Math.random() * size + Math.random() * size) / 2 - size / 2
    const z = (Math.random() * size + Math.random() * size) / 2 - size / 2

    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  material = new THREE.PointsMaterial({
    size: 2,
    color: 0xffffff,
  })

  const particles = new THREE.Points(geometry, material)
  scene.add(particles)

  renderer = new THREE.WebGLRenderer()
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  document.body.style.touchAction = 'none'
  document.body.addEventListener('pointermove', onPointerMove)
  window.addEventListener('resize', onWindowResize)
}

function onWindowResize () {
  windowHalfX = window.innerWidth / 2
  windowHalfY = window.innerHeight / 2

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onPointerMove (event) {
  mouseX = event.clientX - windowHalfX 
  mouseY = event.clientY - windowHalfY
}

function animate () {
  requestAnimationFrame(animate)
  render()
}

function render () {
  camera.position.x += (mouseX * 2 - camera.position.x) * 0.02
  camera.position.y += (-mouseY * 2 - camera.position.y) * 0.02
  camera.lookAt(scene.position)
  renderer.render(scene, camera)
  scene.rotation.x += 0.001
  scene.rotation.y += 0.002
}
