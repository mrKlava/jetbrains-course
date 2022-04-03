import mars from '../images/mars.png'
import rocket from '../images/rocket.png'


const dataProjects = {
    "caseConverter": 
    {
        "title": "Case Converter",
        "btns": "",
    },
    "flascards":
    {
        "title": "Flashcards",
        "cards":
        [
            [
                { "front": "aller", "back": "être + aller"},
                { "front": "je", "back": "je suis allé(e)"},
                { "front": "tu", "back": "tu es allé(e)"},
                { "front": "il", "back": "il est allé"},
                { "front": "elle", "back": "elle est allée"},
                { "front": "nous", "back": "nous sommes allé(e)s"},
                { "front": "vous", "back": "vous êtes allé(e)s"},
                { "front": "ils", "back": "ils sont allés"},
                { "front": "elles", "back": "elles sont allées"},
            ],
            [
                { "front": "avoir", "back": "avoir + eu"},
                { "front": "je", "back": "j'ai eu"},
                { "front": "tu", "back": "tu as eu"},
                { "front": "il", "back": "il a eu"},
                { "front": "elle", "back": "elle a eu"},
                { "front": "nous", "back": "nous avons eu"},
                { "front": "vous", "back": "vous avez eu"},
                { "front": "ils", "back": "ils ont eu"},
                { "front": "elles", "back": "elles ont eu"},
            ],
            [
                { "front": "être", "back": "avoir + été"},
                { "front": "je", "back": "j'ai été"},
                { "front": "tu", "back": "tu as été"},
                { "front": "il", "back": "il a été"},
                { "front": "elle", "back": "elle a été"},
                { "front": "nous", "back": "nous avons été"},
                { "front": "vous", "back": "vous avez été"},
                { "front": "ils", "back": "ils ont été"},
                { "front": "elles", "back": "elles ont été"},
            ],

        ]
    },
    "virtualPiano": 
    {
        "difficulty": 2,
        "title": "Virtual Piano"
    },
    "toDoList": 
    {
        "title": "To-Do List"
    },
    "portfolio": 
    {
        "title": "Portfolio",
        "text": " All this webpage is basically \"Portfolio\" project for JetBrains \"Frontend Developer\" track, but remastered and implemented on React.js. This page is looking like page hyperskill.org with track \"Frontend developer\". Track was finished in february 2022, and remastered in march 2022. ",
    },
    "openSpace": 
    {
        "title": "Open Space",
        "mars": mars,
        "rocket": rocket,
    },
}

export default dataProjects