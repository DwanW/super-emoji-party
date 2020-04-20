export const effects = {
    buildings: {
        home: {
            icon: '🏡',
            description: 'if you go anywhere, you will miss your home',
            choices: [
                {
                    title: 'Meditate',
                    text: 'what better way to feel relaxed than mediatating comfortably at home, you begin to focus your mind...',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,30],
                            resultDescription: 'Your mental stress is reduced significantly.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'As you dive deep into your mind exercise, a feeling of panic, anxiety and fear overwhelms you.'
                        }
                    ],
                },
                {
                    title: 'Netflix time',
                    text: "I don't know what to do, maybe I should just watch some netflix",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Read a book',
                    text: 'browse through collection of books, you might find knowledge to help you on this journey',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        hospital: {
            icon: '🏥',
            description: 'A small clinic offering variety of services',
            choices: [
                {
                    title: 'Donate blood',
                    text: 'for the well being of others, this is may not be bad at all',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'check up with doctors',
                    text: "have doctors examine your health condition",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'visit the lab',
                    text: 'the facility is well equipped with medical equipments, maybe you can find a thing or two',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        hotel: { 
            icon: '🏨',
            description: 'A luxury hotel establishment with high quality guest facilities',
            choices: [
                {
                    title: 'Visit day spa',
                    text: 'sanctuary for tranquil pleasure and peacefulness, claims to revitalize',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Visit swimming pool',
                    text: "one of the features in this hotel, this small sized pool look a little deep",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Do nothing',
                    text: "the price of anything is the amount of life you exchange for it, so you decided to walk away",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        shop: {
            icon: '🏪',
            description: 'A general store where you could get various goods and trinkets',
            choices: [
                {
                    title: 'Get snack',
                    text: 'You see some of your favorite brand: cheese-it, cool doritos, fruit gutters, chip ...',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Play lottery',
                    text: "life is a gamble, trust your heart and follow your instinct",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Browse weird product',
                    text: 'strange manuscripts, dolls and antiquities, covered by a thick layer of dust',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        tent: {
            icon: '⛺',
            description: 'A temporary rest spot for travellers like you',
            choices: [
                {
                    title: 'Take a rest',
                    text: 'spent the night in the small tent',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Stay up for the night',
                    text: "need to stay vigilant to be in the wilderness",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Travel during the night',
                    text: 'might not be the safest option, but the excitement of advanture keep you going',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        factory: {
            icon: '🏭',
            description: 'A complex building with machineries operating automonusly',
            choices: [
                {
                    title: 'Scavager hunt',
                    text: 'rumor says there are very useful machineries you could carry for personal use',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Build a toolbox',
                    text: "dismantle some of the things in the factory and make helpful toolbox for your journey",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                }
            ]
        },
        church: {
            icon: '⛪',
            description: 'religious congregation where power has been passed down from god',
            choices: [
                {
                    title: 'Baptism',
                    text: 'to be granted the power to save oneself',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Offer Prayer',
                    text: "offer something valuable to the gods to receive the blessings",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                }
            ]
        }
    },
    foods: {
        pizza: {
            icon: '🍕',
            description: 'A normal looking pizza, however the toppings are a bit strange',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        burger: {
            icon: '🍔',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [20,0],
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,0],
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,20],
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        hotdog: {
            icon: '🌭',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        bacon: {
            icon: '🥓',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        chickenleg: {
            icon: '🍗',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        pancake: {
            icon: '🥞',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        doughnut: {
            icon: '🍩',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        lolipop: {
            icon: '🍭',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        shortcake: {
            icon: '🍰',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        kiwi: {
            icon: '🥝',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        }
    },
    animals: {
        snake: {
            icon: '🐍',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        crocodile: {
            icon: '🐊',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        rhinoceros: {
            icon: '🦏',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        trex: {
            icon: '🦖',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        shunk: {
            icon: '🦨',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        scorpion: {
            icon: '🦂',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        tiger: {
            icon: '🐅',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        dog: {
            icon: '🐕',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        monkey: {
            icon: '🐒',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        }
    },
    weather: {
        sunny: {
            icon: '🌞',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        rainbow: {
            icon: '🌈',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        }
    },
    transportation: {
        taxi:
        {
            icon: '🚕',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        bus: 
        {
            icon: '🚌',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        train: {
            icon: '🚆',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        airplane: {
            icon: '🛬',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        rocket: {
            icon: '🚀',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
        parachute: {
            icon: '🪂',
            description: 'A wild burger has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: 'the look of tasty cheese and grilled meat makes you want to eat it in one bite',
                    outCome: [
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: 20,
                            resultDescription: 'You took one big bite, the burger is more delicious than you would expect.'
                        },
                        {
                            type: 'MODIFY_HEALTH',
                            baseValue: -10,
                            resultDescription: 'You took one big bite, it is the worse thing ever.'
                        }
                    ],
                },
                {
                    title: 'Inspect it',
                    text: "the suspicious looking burger makes you wonder what's inside",
                    outCome: [
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: 20,
                            resultDescription: 'Upon inspection, you find that it is not as healthy as you think, and you are glad to walk away from it.'
                        },
                        {
                            type: 'MODIFY_SPIRIT',
                            baseValue: -10,
                            resultDescription: 'You took a closer look at the burger, the spoiled smell made you regret getting too close.'
                        }
                    ],
                },
                {
                    title: 'Step on it',
                    text: 'I must destroy this sorcery',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 2,
                            resultDescription: 'it vanished just before you set foot onto it, you suddenly feel a mysterious wind on your back.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the burger suddenly stood up as you get close, and pushes you away.'
                        }
                    ],
                }
            ]
        },
    }
}