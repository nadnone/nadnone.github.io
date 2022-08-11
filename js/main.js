import loadgallery from "./gallery.js";
import { cometo, navbar } from "./navbar.js";
import loadSkills from "./skills.js"
import {themes_load} from './themes.js'
import mobile_fun from "./mobile.js"

if (window.innerWidth < 1201)
{
    mobile_fun();
}
else {
    navbar();
    loadSkills();
    
    cometo("contact")
}
loadgallery();




themes_load();
let params = new URLSearchParams(window.location.search);
let themeid = params.get("theme")
if (themeid != null) themes_load(themeid)

