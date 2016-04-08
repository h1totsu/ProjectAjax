function renderViews(jsonObj) {
    for(var i = 0; i < jsonObj['good'].length; i++) {
         var goodName = jsonObj['good'][i].name;
        document.getElementById('list').innerHTML +=
            '<li>' +
                '<div class="good">' +
                    '<span id=\"' + goodName +  '\" class=\"name\">' + goodName +  '</span>' +
                    '<img class="img" src=\"' + jsonObj['good'][i].image + '\"/>' +
                    '<span class=\"price\">' + jsonObj['good'][i].price +  '</span>' +
                    '<a onclick=\"showMoreInfo(\'' + goodName + '\')\" href=\"javascript:void(0)\"' +
                        'class=\"moreInfo\">More...</a>' +
                '</div>' +
            '</li>'
    }
}

var overlay = document.getElementById('popupOverlay');
var popup = document.getElementById('popupSection');

function showMoreInfo(name) {
    
    overlay.style.visibility = 'visible';
    
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "popup.php?name=" + name, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var good = JSON.parse(xhr.responseText);
            popup.style.visibility = 'visible'
            popup.innerHTML =
                '<span class=\"name\">' + good.name +  '</span>' +
                '<span class=\"serial\">' + good.serial +  '</span>' +
                '<img class="img" src=\"' + good.image + '\"/>' +
                '<span class=\"price\">' + good.price +  '</span>' +
                '<span class=\"description\">' + good.description +  '</span>'
        }
    };
    xhr.send();
}

overlay.onclick = function () {
    if (overlay.style.visibility == 'visible') {
        popup.innerHTML = '';
        overlay.style.visibility = 'hidden';
    } else {
        overlay.style.visibility = 'visible';
    }
}