function closeModal() {
    var restauranteModal = document.getElementById('modal');
    restauranteModal.classList.add('ocultar');
    setTimeout(function() {
        restauranteModal.style.display = 'none';
        var cancion = document.getElementById('cancion');
        cancion.play();
    }, 1000);
}
function closeV(){
    document.getElementById('videoP').style.display="none";
}
function video1(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoBahrein.mp4";
}
function video2(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoSau";
}
function video3(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoAustralia.mp4";
}
function video4(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoSuzuka.mp4";
}
function video5(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoChi.mp4";
}
function video6(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoMiami.mp4";
}
function video7(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoImola.mp4";
}
function video8(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoMonaco.mp4";
}
function video9(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoCanada.mp4";
}
function video10(){
    document.getElementById('videoP').style.display="block";
    document.getElementById('video').src = "videoEs.mp4";
}
document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('conte2', {
        zoomControl: false,
        scrollWheelZoom: false
    }).setView([41.35011261487338, 2.107239216026741], 4);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    document.getElementById("Montmelo").addEventListener("click", function() {
        var latlng = [41.56954803220597, 2.2578215177397722];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("bahrain").addEventListener("click", function() {
        var latlng = [26.032236858590352, 50.511255807788615];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("yeda").addEventListener("click", function() {
        var latlng = [21.63219287208234, 39.1042259770171];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("melburne").addEventListener("click", function() {
        var latlng = [-37.84991209588062, 144.9700838392933];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("japon").addEventListener("click", function() {
        var latlng = [34.847706696818854, 136.5388887171299];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("china").addEventListener("click", function() {
        var latlng = [31.34155275719782, 121.22202682627754];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("miami").addEventListener("click", function() {
        var latlng = [25.955102925195355, -80.23670544720515];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("imola").addEventListener("click", function() {
        var latlng = [44.34498533836566, 11.715949232433285];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("monaco").addEventListener("click", function() {
        var latlng = [43.737539481541795, 7.420874020974708];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("canada").addEventListener("click", function() {
        var latlng = [45.50160470404591, -73.52264920380837];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("austria").addEventListener("click", function() {
        var latlng = [47.22015659197887, 14.765036325032515];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("bre").addEventListener("click", function() {
        var latlng = [52.06940387873698, -1.0213986033437914];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("hun").addEventListener("click", function() {
        var latlng = [47.579918291062654, 19.247523284692846];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("bel").addEventListener("click", function() {
        var latlng = [50.44488629989654, 5.965424363259445];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("hol").addEventListener("click", function() {
        var latlng = [52.391694748217276, 4.540923192192603];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("ita").addEventListener("click", function() {
        var latlng = [45.62001153339045, 9.281635760440983];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("azer").addEventListener("click", function() {
        var latlng = [40.37305702429387, 49.853160138191335];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("sin").addEventListener("click", function() {
        var latlng = [1.2916216925699102, 103.85780403983544];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("aus").addEventListener("click", function() {
        var latlng = [30.13895352314892, -97.6352498921524];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("mex").addEventListener("click", function() {
        var latlng = [19.405825991160803, -99.09259813478148];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("bra").addEventListener("click", function() {
        var latlng = [-23.704603800442396, -46.69925146263777];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("veg").addEventListener("click", function() {
        var latlng = [36.17573844042981, -115.14336599287846];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("cat").addEventListener("click", function() {
        var latlng = [25.488707615828865, 51.450564168119456];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });

    document.getElementById("abu").addEventListener("click", function() {
        var latlng = [24.470375398752246, 54.60542014489257];
        var zoomLevel = 16;
        map.flyTo(latlng, zoomLevel);
    });
});