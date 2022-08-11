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
    let els = document.querySelectorAll(".skill_pourcents");
    
    els.forEach(el => el.onclick = event_graph)

    let texts = document.querySelectorAll("#skills .text");
    
    texts.forEach(text => text.onclick = event_graph)



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

        
        let rect = document.createElement("path")

        let w =  (CENTER.x/2)/langs_data.length
        let x = (i * w);
        let y = (CENTER.y*2) - (CENTER.y * langs_data[i].pourcent / 100)
        let h = CENTER.y*2 - y;

        rect.setAttribute("d", `M${x} ${y}, L ${x+w} ${y} L${x+w} ${y+h} L ${x} ${y+h} Z`)
        rect.classList.add("pourcents");
        rect.classList.add("rect");


        canvas.appendChild(rect);

        let text = document.createElement("text")

        text.setAttribute("x", `${(x) + w*0.3}px`);
        text.setAttribute("y", `${y + 100}px`);
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
        path.classList.add("skill_pourcents");

        path.setAttribute("d", `M${CENTER.x} ${CENTER.y} L${px1} ${py1} L${px2} ${py2} Z`)

        let text = addText(rad, CENTER, i, rayon);

        let svg = document.createElement("svg");
        svg.appendChild(path)
        svg.id =  `id_${i}`;
        svg.appendChild(text)
        canvas.appendChild(svg)

    }


}


