const myInterval = setInterval(afterload, 1000);
function afterload() {
    try{
        var app = new SpeRuntime.Application();
        app.start("/scene.gltf");
        // window.onload=()=>{
        // console.log("still running");
        let  elem = document.getElementById("canvasContainer");                                                                                                                                                                                                                                                                                                                                                                                              elem = document.getElementById('canvas3d');
        elem.style.width = "78%";
        elem.style.height = "78%";
        stopAfterload();
        // }
    }catch(err) {

    }
}

function stopAfterload() {
    clearInterval(myInterval);
  }

