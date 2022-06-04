var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {

        for (j = 0; j < acc.length; j++) {

            let panel = acc[j].nextElementSibling;
            if (panel.style.maxHeight && acc.item(j) != this) {
                panel.style.maxHeight = null;
                panel.style.overflow = "hidden";

            }
        };


        this.classList.toggle("active");

        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            panel.style.overflow = "hidden";
        } else {
            panel.style.maxHeight = (panel.scrollHeight + 20) + "px";
            //to ensure nothing cut off, but only after roll out!
            setTimeout(() => {panel.style.overflow = "visible"}, 200);
        }
    });
}