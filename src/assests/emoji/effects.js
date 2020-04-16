export const effects = {
    buildings: {
        home: '🏡',
        hospital: '🏥',
        hotel: '🏨',
        shop: '🏪',
        school: '🏫',
        hotspring: '♨',
        tent: '⛺',
        factory: '🏭',
        roadblock: '🚧',
        church: '⛪'
    },
    foods: {
        pizza: '🍕',
        burger: {
            icon: '🍔',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    type: 'MODIFY_HEALTH',
                    baseValue: 20,
                    resultDescription: 'You took one big bite, the burger is more delicious than you would expect.',
                },
                {
                    title: 'Inspect it',
                    text: 'the uspicious looking burger makes you wonder what is inside',
                    type: 'MODIFY_SPIRIT',
                    baseValue: 20,
                    resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this socery',
                    type: 'MOVE',
                    baseValue: 2,
                    resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                }
            ]
        },
        hotdog: '🌭',
        bacon: '🥓',
        chickenleg: '🍗',
        pancake: '🥞',
        doughnut: '🍩',
        lolipop: '🍭',
        shortcake: '🍰',
        kiwi: '🥝'
    },
    animals: {
        snake: '🐍',
        crocodile: '🐊',
        rhinoceros: '🦏',
        trex: '🦖',
        shunk: '🦨',
        spider: '🕷',
        scorpion: '🦂',
        tiger: '🐅',
        dog: '🐕',
        monkey: '🐒'
    },
    weather: {
        sunny: '🌞',
        rain: '🌧',
        snow: '🌨',
        lightning: '🌩',
        tornado: '🌪',
        fog: '🌫',
        cloud: '☁',
        fire: '🔥',
        meteor: '☄',
        rainbow: '🌈'
    },
    transportation: {
        taxi: '🚕',
        bus: '🚌',
        train: '🚆',
        airplane: '🛬',
        rocket: '🚀',
        parachute: '🪂',
    }
}