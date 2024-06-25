document.getElementById("link").addEventListener("click", function(event){
    event.preventDefault();
})





var form = document.querySelector('#registration-form');

// Listen for changes to fields inside the form
form.addEventListener('input', function (event) {

// Log the field that was changed
    console.log(event.target);

}, false);



document.getElementById("title").style.fontSize = "30px";



document.getElementById("title").className = "custom-title";









function loadAssets(filename, filetype) {
    if (filetype == "css") { // External CSS file
        var fileReference = document.createElement("link")
        fileReference.setAttribute("rel", "stylesheet");
        fileReference.setAttribute("type", "text/css");
        fileReference.setAttribute("href", filename);
    } else if (filetype == "js") { // External JavaScript file
        var fileReference = document.createElement('script');
        fileReference.setAttribute("type", "text/javascript");
        fileReference.setAttribute("src", filename);
    }
    if (typeof fileReference != "undefined")
        document.getElementsByTagName("head")[0].appendChild(fileReference)
}
