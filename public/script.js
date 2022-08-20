const app = new SpeRuntime.Application();
console.log(app);
app.start("/scene.gltf");
window.onload=()=>{
    let element = document.getElementById('canvas3d');
    console.log(element);
    element.style.width = "80%";
    element.style.height = "80%";
}
