import { earbud } from "./earbud.js";
import { Taggedearbud } from "./taggedearbud.js";


const Sony = new earbud(
    "Sony",
    "images/Sony1.jpg"
);
const Bored = new earbud(
    "Bored",
    "images/white1.jpg"
);

const Sony2 = new Taggedearbud(
    "Sony",
    "images/Sony2.jpg",
    ["dark", "wireless",]
);

document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery");

   

    Sony.info();
    Sony.showImg(galleryContainer);
    Bored.info();
    Bored.showImg(galleryContainer);


    const sony2Image = Sony2.showImg(galleryContainer);
    const handleClick = () => {
        Sony2.color();  
        sony2Image.removeEventListener("click", handleClick);  
    };
    sony2Image.addEventListener("click", handleClick);
});