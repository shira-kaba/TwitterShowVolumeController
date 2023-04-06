// alert("hello")

setInterval(() => {
    for (let e of document.getElementsByTagName("video")) {
        e.setAttribute("controls", "controls");
        let rmv = e.parentElement.parentElement.nextElementSibling;
        if (rmv) {
            rmv.remove();
        }
    }
}, 1000)