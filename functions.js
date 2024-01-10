function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var style = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var checkcurr = style.getAttribute("href");

    // 1 (c) Determine new stylesheet file name
    var newStyle;
    if (checkcurr == "style1.css") {
        newStyle = "style2.css";
    }
    else {
        newStyle = "style1.css";
    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    style.setAttribute("href", newStyle);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("localstore", newStyle);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
        var storeStyle = localStorage.getItem("localstore");

    // 2 (b) get html style element by ID
    var stylePersist = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.

    if(storeStyle == null) {
        stylePersist.setAttribute("href", "style1.css");
    }
    else {
        stylePersist.setAttribute("href", storeStyle);
    }

}


