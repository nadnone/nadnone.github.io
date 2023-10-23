import themes_list from "../config/themes.js";

let style = document.documentElement.style;

export function themes_load(param) {

    let l = themes_list.length - 2; // purple


    if (param != null) l = param;


    style.setProperty("--primary", themes_list[l].primary.main); 
    style.setProperty("--secondary", themes_list[l].secondary.main); 

    style.setProperty("--text_on_primary", themes_list[l].text.primary); 
    style.setProperty("--text_on_secondary", themes_list[l].text.secondary); 

    style.setProperty("--primary_light", themes_list[l].primary.light); 
    style.setProperty("--primary_dark", themes_list[l].primary.dark); 

    style.setProperty("--secondary_light", themes_list[l].secondary.light); 
    style.setProperty("--secondary_dark", themes_list[l].secondary.dark); 


}

