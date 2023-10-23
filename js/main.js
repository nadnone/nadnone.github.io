import loadgallery from "./gallery.js";
import { cometo, navbar } from "./navbar.js";
import { themes_load } from './themes.js'
import mobile_fun from "./mobile.js"
import timeline from "./timeline.js"
import terminal_run from "./write_console.js";

themes_load()
loadgallery()

if (window.innerWidth < 1201)
{
    mobile_fun()
}
else 
{
    timeline();
    navbar()
    cometo("contact")
    terminal_run();
}


let params = new URLSearchParams(window.location.search)
let themeid = params.get("theme")
if (themeid != null) themes_load(themeid)