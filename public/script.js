const myInterval = setInterval(afterload, 1000);
function afterload() {
    try{
        var app = new SpeRuntime.Application();
        app.start("/scene.gltf");
        // window.onload=()=>{
        // console.log("still running");
        let  elem = document.getElementById("canvasContainer");                                                                                                                                                                                                                                                                                                                                                                                              elem = document.getElementById('canvas3d');
        elem.style.width = "75%";
        elem.style.height = "75%";
        stopAfterload();
        // }
    }catch(err) {

    }
}

function stopAfterload() {
    clearInterval(myInterval);
  }

