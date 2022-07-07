let galleries = document.getElementsByClassName('inline-gallery-container');

for (let i = 0; i < galleries.length; i++) {

    galleries[i].id = 'gallery-' + i; // <-------------------- creating IDs here

    let currentLG = lightGallery(document.getElementById('gallery-' + i), {
        container: document.getElementById('gallery-' + i),
        galleryId: "gallery-" + i,
        hash: true,
        closable: false,
        download: false,
        counter: false,
        hideBarsDelay: 1000,
        showMaximizeIcon: true,
        subHtmlSelectorRelative: true,
        appendSubHtmlTo: ".lg-item",
        slideShowAutoplay: true,
        //TODO: implement autoplay if bug is resolved.....
        plugins: [lgZoom],
    });

    setTimeout(() => {
        currentLG.openGallery();
    }, 200);
}
// const $lgContainer = document.querySelectorAll(".inline-gallery-container");
// //const $lgContainer = document.getElementById("inline-gallery-container-1");
// for (let i = 0; i < $lgContainer.length; i++) {
//     let element = $lgContainer[i];
//     let inlineGallery = lightGallery(element, {
//         container: element,
//         galleryId: "inline-gallery-container-" + 1,
//         hash: true,
//         closable: false,
//         download: false,
//         counter: false,
//         hideBarsDelay: 1000,
//         showMaximizeIcon: true,
//         subHtmlSelectorRelative: true,
//         appendSubHtmlTo: ".lg-item",
//         slideShowAutoplay: true,
//         plugins: [lgZoom, lgAutoplay],
//     });

//     setTimeout(() => {
//         inlineGallery.openGallery();
//     }, 200);
// };