const myInterval = setInterval(afterload, 1500);
function afterload() {
    try{
        var app = new SpeRuntime.Application();
        app.start("/scene.gltf");
        // window.onload=()=>{
        let  elem = document.getElementById("canvas3d");                                                                                                                                                                                                                                                                                                                                                                                              elem = document.getElementById('canvas3d');
        elem.style.width = "75%";
        elem.style.height = "75%";
        stopAfterload();
        // }
    }catch(err) {console.log(err);}
}

function stopAfterload() {
    clearInterval(myInterval);
  }

