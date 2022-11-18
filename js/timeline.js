import data from "../config/timeline.js"

export default function timeline()
{
    let timeline = document.querySelector("#timeline .main");

    for (let i = 0; i < data.length; i++)
    {
        let container = document.createElement("div");
        if (i % 2 > 0) container.className = "container left"
        else container.className = "container right"

        let content = document.createElement("div")
        content.className = "content"

        let date = document.createElement("h2")
        date.innerText = data[data.length - i - 1].date

        content.appendChild(date)
        content.innerHTML += data[data.length - i - 1].content

        container.appendChild(content)
        timeline.appendChild(container)

        if (i % 2 == 0) 
        {
            let rule = document.createElement("div")
            rule.className = "rule"

            rule.innerHTML = `<div class="circle"></div>`


            if(i != data.length -1) rule.innerHTML += `<div class="circle"></div>`
            
            timeline.appendChild(rule)


        }
        
        
    }

    if (data.length % 2 > 0 )
    {
        let container = document.createElement("div");
        container.className = "container"
        timeline.appendChild(container)   
    }
    
}