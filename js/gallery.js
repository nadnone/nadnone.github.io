import gallery_data from '../config/gallery.js'


export default function loadgallery()
{
    let gallery_pan = document.querySelector("#gallery");

    for (let i = 0; i < gallery_data.length; i++) {
        const item = gallery_data[i];

        let vignette = document.createElement("div");
        vignette.className = "vignette";

        let img = new Image()
        img.src = item.image;

        let text = document.createElement("p");
        text.innerText = item.title;

        let href = document.createElement("a");
        href.href = gallery_data[i].link;
        href.target = "_blank"

        href.appendChild(img)

        vignette.appendChild(href);
        vignette.appendChild(text);

        gallery_pan.appendChild(vignette);
        
    }

}