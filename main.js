function closeModal() {
    var restauranteModal = document.getElementById('modal');
    restauranteModal.classList.add('ocultar');
    setTimeout(function() {
        restauranteModal.style.display = 'none';
        var cancion = document.getElementById('cancion');
        cancion.play();
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function () {
    var map = L.map('conte2', {
        scrollWheelZoom: false
    }).setView([41.35011261487338, 2.107239216026741], 4);
    
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // document.getElementById("volver").addEventListener("click", function() {
    //     var latlng = [41.56954803220597, 2.2578215177397722];
    //     var zoomLevel = 4;
    //     map.flyTo(latlng, zoomLevel);
    // });

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
});