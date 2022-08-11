import skills_data from '../config/skills.js'
import langs_data from '../config/lang.js'
import { event_graph } from './events.js'

export default function loadSkills()
{
    let canvas = document.querySelector("#skills svg")
    

    const CENTER = {
        "x": canvas.clientWidth/1.5,
        "y": canvas.clientHeight/2
    }


    
    const rad = 2*Math.PI/skills_data.length

    addPourcents(canvas, rad, CENTER)

    addLangs(canvas, CENTER);

    canvas.innerHTML += "";


    // EVENTS

    let els = document.querySelectorAll(".skills_pourcent");
    
    els.forEach((el) => {
        el.addEventListener("click", event_graph)
    })




    // diapo 
    setInterval(()=> {

        const max = skills_data.length - 1
        let rand = Math.floor(Math.random() * max);
        document.querySelector("#skills img").src = skills_data[rand].media

    }, 6000)

}

function addLangs(canvas, CENTER)
{

    for (let i = 0; i < langs_data.length; i++) {

        
        let rect = document.createElement("rect")

        let w =  (CENTER.x/2)/langs_data.length

        rect.setAttribute("width", w)
        rect.setAttribute("height", `${ CENTER.y * langs_data[i].pourcent / 100}px`);
        rect.setAttribute("y", `${CENTER.y}`);
        rect.setAttribute("x", `${i * w}px`);
        rect.classList.add("pourcents");
        rect.classList.add("rect");


        canvas.appendChild(rect);

        let text = document.createElement("text")

        text.setAttribute("x", `${(i * w) + w*0.3}px`);
        text.setAttribute("y", `${CENTER.y + 100}px`);
        text.classList.add("text");

        text.innerText = langs_data[i].name

        canvas.appendChild(text)

    }

}

function addText(rad, CENTER, i, rayon)
{
    const x = (Math.cos(0.5 + i * rad) * rayon * skills_data[i].pourcent/200) + CENTER.x
    const y = (Math.sin(0.5 + i * rad) * rayon * skills_data[i].pourcent/200) + CENTER.y

    let text = document.createElement("text")

    text.setAttribute("x", x - skills_data[i].title.length*5);
    text.setAttribute("y", y);
    text.classList.add("text");


    text.innerText = skills_data[i].title

    return text
}

function addPourcents(canvas, rad, CENTER)
{
    const rayon = canvas.clientHeight/1.5

    for (let i = 0; i < skills_data.length; i++) {

        const px1 = (Math.cos(i*rad) * skills_data[i].pourcent/100 * rayon) + CENTER.x
        const py1 = (Math.sin(i*rad) * skills_data[i].pourcent/100 * rayon) + CENTER.y

        const px2 = (Math.cos((i+1) * rad) * skills_data[i].pourcent/100 * rayon) + CENTER.x
        const py2 = (Math.sin((i+1) * rad) * skills_data[i].pourcent/100 * rayon) + CENTER.y

        let path = document.createElement("path")
        path.classList.add("pourcents");
        path.classList.add("skills_pourcent");
        path.id = `id_${i}`

        path.setAttribute("d", `M${CENTER.x} ${CENTER.y} L${px1} ${py1} L${px2} ${py2} Z`)

        let text = addText(rad, CENTER, i, rayon);

        canvas.appendChild(path)
        canvas.appendChild(text)

    }


}


