import * as os from 'os'

var dictPokeNea = [
    {
        'id': '1',
        'Name': 'Bulbasur',
        'Tall': '0.7',
        'Skill': 'thickness',
        'Image': '/img/001.png',
        'Phrase': 'Get ready to be inspired',
        'ContainerId': os.hostname(),
    },
    {
        'id': '2',
        'Name': 'Ivysaur',
        'Tall': '1.0',
        'Skill': 'thickness',
        'Image': '/img/002.png',
        'Phrase': 'See rejection as redirection',
        'ContainerId': os.hostname(),
    },
    {
        'id': '3',
        'Name': 'Venusaur',
        'Tall': '2.0',
        'Skill': 'thickness',
        'Image': '/img/003.png',
        'Phrase': 'There is beauty in simplicity',
        'ContainerId': os.hostname(),
    },
    {
        'id': '4',
        'Name': 'Charmander',
        'Tall': '0.6',
        'Skill': 'sea flames',
        'Image': '/img/004.png',
        'Phrase': 'You cannot be late until you show up',
        'ContainerId': os.hostname(),
    },
    {
        'id': '5',
        'Name': 'Charmeleon',
        'Tall': '1.1',
        'Skill': 'sea flames',
        'Image': '/img/005.png',
        'Phrase': 'Maybe life is testing you. Do not give up',
        'ContainerId': os.hostname(),
    },
    {
        'id': '6',
        'Name': 'Charizard',
        'Tall': '1.7',
        'Skill': 'sea flames',
        'Image': '/img/006.png',
        'Phrase': 'Impossible is just an opinion',
        'ContainerId': os.hostname(),
    },
    {
        'id': '7',
        'Name': 'Squirtle',
        'Tall': '0.5',
        'Skill': 'torrent',
        'Image': '/img/007.png',
        'Phrase': 'Alone or not you gonna walk forward',
        'ContainerId': os.hostname(),
    }
];

export const sendPokeNea = (req, res) => {
    const number = Math.floor(Math.random() * Object.keys(dictPokeNea).length);
    var viewData = {
        pokenea: dictPokeNea[number],
    }
    res.render('view1', viewData)
}

export const sendPokeNeaImage = (req, res) => {
    const number = Math.floor(Math.random() * Object.keys(dictPokeNea).length);
    var viewData = {
        pokenea: dictPokeNea[number],
    }
    res.render('view2', viewData)
}