
import confetti from "canvas-confetti"


export class MainController {



    constructor() {

    }

    render() {

        const mainContainer = document.getElementById('main-container')
        const button1 = document.createElement('button')
        const button2 = document.createElement('button')
        const button3 = document.createElement('button')

        button1.appendChild(document.createTextNode('Fire 1'))
        button2.appendChild(document.createTextNode('Fire 2'))
        button3.appendChild(document.createTextNode('Fire 3'))

        button1.addEventListener('click',()=>{
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
        })

        button2.addEventListener('click',()=>{
            confetti({
                ...defaults,
                particleCount: 40,
                scalar: 1.2,
                shapes: ['star']
              });
            
              confetti({
                ...defaults,
                particleCount: 10,
                scalar: 0.75,
                shapes: ['circle']
              });
            
            
            setTimeout(shoot, 0);
            setTimeout(shoot, 100);
            setTimeout(shoot, 200);
            })
        

        mainContainer.appendChild(button1)
        mainContainer.appendChild(button2)
        mainContainer.appendChild(button3)

    }


}