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
                            baseValue: [0,20],
                            resultDescription: 'You found a great show, every characters likable and story is great.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'You found a terrible show, characters are not interesting to you at all.'
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
                            resultDescription: 'knowledge empowers you.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'the book content has absorbed you.'
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
                            type: 'MODIFY_STATS',
                            baseValue: [-5, 30],
                            resultDescription: 'besides the initial needle pain, you are now feeling great.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10, -5],
                            resultDescription: 'You are losing more blood than you expect.'
                        }
                    ],
                },
                {
                    title: 'check up with doctors',
                    text: "have doctors examine your health condition",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,5],
                            resultDescription: 'after hearing that you are as health as you can be, your spirit is lifted.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'Your doctor states that you have health concerns...'
                        }
                    ],
                },
                {
                    title: 'visit the lab',
                    text: 'the facility is well equipped with medical equipments, maybe you can find a thing or two',
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'shield',
                            resultDescription: 'you found a health shield.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'abacus',
                            resultDescription: 'you found an abacus.'
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
                            type: 'MODIFY_STATS',
                            baseValue: [5,15],
                            resultDescription: 'your body and mind become relaxed.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,-10],
                            resultDescription: 'your body become relaxed, however you mind become tense due to remember past events.'
                        }
                    ],
                },
                {
                    title: 'Visit swimming pool',
                    text: "one of the features in this hotel, this small sized pool look a little deep",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,-5],
                            resultDescription: 'you become slightly tired after swimming, however you become more healthy.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-5],
                            resultDescription: 'swimming for a long time worn you down, you feel dizzy'
                        }
                    ],
                },
                {
                    title: 'Do nothing',
                    text: "the price of anything is the amount of life you exchange for it, so you decided to walk away",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: ''
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'in order to go past it, you had to take a detour'
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
                            type: 'ADD_ITEM',
                            baseValue: 'chocolate-bar',
                            resultDescription: 'you get a chocolatebar.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'hot-pepper',
                            resultDescription: 'you got a hot pepper.'
                        }
                    ],
                },
                {
                    title: 'Play lottery',
                    text: "life is a gamble, trust your heart and follow your instinct",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'well, not everyday is a lucky day.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0, 20],
                            resultDescription: 'You won a super rare prize, and it lifts your spirit greatly '
                        }
                    ],
                },
                {
                    title: 'Browse weird product',
                    text: 'strange manuscripts, dolls and antiquities, covered by a thick layer of dust',
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'crystal-ball',
                            resultDescription: 'you got a crystal-ball'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'bomb',
                            resultDescription: 'you got a bomb'
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
                            type: 'MODIFY_STATS',
                            baseValue: [20,0],
                            resultDescription: 'resting recovered your strength.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-5,-10],
                            resultDescription: 'spending night in the wilderness make it harder to fall asleep.'
                        }
                    ],
                },
                {
                    title: 'Stay up for the night',
                    text: "need to stay vigilant to be in the wilderness",
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'top-hat',
                            resultDescription: 'you found a top-hat near the tent.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-10],
                            resultDescription: 'staying up makes you tired.'
                        }
                    ],
                },
                {
                    title: 'Travel during the night',
                    text: 'might not be the safest option, but the excitement of advanture keep you going',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 3,
                            resultDescription: 'tonight is peaful and safe.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 1,
                            resultDescription: 'preditors howl during the night, you carefully tranversed through the land.'
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
                            type: 'ADD_ITEM',
                            baseValue: "hammer",
                            resultDescription: 'you found a hammer.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'brick',
                            resultDescription: 'you found a brick.'
                        }
                    ],
                },
                {
                    title: 'Build a toolbox',
                    text: "dismantle some of the things in the factory and make helpful toolbox for your journey",
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'toolbox',
                            resultDescription: 'you compiled a toolbox.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'gear',
                            resultDescription: 'this little gear is the only left after the dismantle'
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
                            type: 'MODIFY_STATS',
                            baseValue: [5,5],
                            resultDescription: 'inner sins are washed away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'this whole process makes you quite uncomfortable.'
                        }
                    ],
                },
                {
                    title: 'Offer Prayer',
                    text: "offer your soul to the gods to receive the blessings",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-10],
                            resultDescription: 'unfortunately that did not work.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'candle',
                            resultDescription: 'you received candle of protection.'
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
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [20,0],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,0],
                            resultDescription: 'the toppings are awful.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the pizza'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the pizza'
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
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [20,0],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,-5],
                            resultDescription: 'it is aight, not great.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the burger'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the burger'
                        }
                    ],
                }
            ]
        },
        hotdog: {
            icon: '🌭',
            description: 'A wild hotdog has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [20,0],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,0],
                            resultDescription: 'it is very salty to enjoy'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the hotdog'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the hotdog'
                        }
                    ],
                }
            ]
        },
        bacon: {
            icon: '🥓',
            description: 'A wild bacon has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,10],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,10],
                            resultDescription: 'it is great, however there is way too much fat on it.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the bacon'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the bacon'
                        }
                    ],
                }
            ]
        },
        chickenleg: {
            icon: '🍗',
            description: 'A wild chicken leg has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,10],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,-10],
                            resultDescription: 'there is no flavor to the chicken, and it taste to plain.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the chicken leg'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the chicken leg'
                        }
                    ],
                }
            ]
        },
        pancake: {
            icon: '🥞',
            description: 'A wild pancake has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [7,5],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-5,-7],
                            resultDescription: 'the syrup are too sweet to your taste.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the pancake'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the pancake'
                        }
                    ],
                }
            ]
        },
        doughnut: {
            icon: '🍩',
            description: 'A wild doughnut has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [15,5],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-10],
                            resultDescription: 'it has expired.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the doughnut'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the doughnut'
                        }
                    ],
                }
            ]
        },
        lolipop: {
            icon: '🍭',
            description: 'A wild lolipop has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,20],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,5],
                            resultDescription: 'your teeth deteoriate after you eat it.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the lolipop'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the lolipop'
                        }
                    ],
                }
            ]
        },
        shortcake: {
            icon: '🍰',
            description: 'A wild cake has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,15],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,-8],
                            resultDescription: 'cake is great however you wanted more.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the cake'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the cake'
                        }
                    ],
                }
            ]
        },
        kiwi: {
            icon: '🥝',
            description: 'A wild kiwi has Appeared',
            choices: [
                {
                    title: 'Eat it',
                    text: '',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,8],
                            resultDescription: 'it is delicious'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,-8],
                            resultDescription: 'your togue becomes numb after you eat it.'
                        }
                    ],
                },
                {
                    title: 'Walk away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the kiwi'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'You walked away from the kiwi'
                        }
                    ],
                }
            ]
        }
    },
    animals: {
        snake: {
            icon: '🐍',
            description: 'A wild snake has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,0],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-30,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-10],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,5],
                            resultDescription: 'The snake is not threatened and calmed down'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -3,
                            resultDescription: 'The snake agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        },
        crocodile: {
            icon: '🐊',
            description: 'A crocodile has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,0],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-40,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-15,-10],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,7],
                            resultDescription: 'The crocodile walks away'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -4,
                            resultDescription: 'The crocodile agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        },
        rhinoceros: {
            icon: '🦏',
            description: 'A rhinoceros has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [15,0],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-45,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-8],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-18,-10],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,15],
                            resultDescription: 'The rhino wants to be your friend'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -4,
                            resultDescription: 'The rhino chases, you had to run away.'
                        }
                    ],
                }
            ]
        },
        trex: {
            icon: '🦖',
            description: 'A T-rex has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [20,20],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-80,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-15],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-30,-25],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'The t-rex becomes uninterested in you'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -10,
                            resultDescription: 'The t-rex agressively charge towards you, you had to run for your life.'
                        }
                    ],
                }
            ]
        },
        shunk: {
            icon: '🦨',
            description: 'A shunk has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,15],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-15],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-5,-10],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-8],
                            resultDescription: 'the shunk is not interested'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -3,
                            resultDescription: 'The shunk agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        },
        scorpion: {
            icon: '🦂',
            description: 'A scorpion has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [10,8],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-60,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you managed to ran away.'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-30,-30],
                            resultDescription: 'only good friend for scorpion is a dead friend'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -1,
                            resultDescription: 'The scorpion agressively charge towards you, you had to move away.'
                        }
                    ],
                }
            ]
        },
        tiger: {
            icon: '🐅',
            description: 'A tiger has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [30,20],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-30,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-10],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-25,-10],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,5],
                            resultDescription: 'The tiger is not interested in you anymore'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -9,
                            resultDescription: 'The tiger agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        },
        dog: {
            icon: '🐕',
            description: 'A wild dog has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [15,0],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-15,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-12,-14],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'ball',
                            resultDescription: 'you found a ball of friendship'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -5,
                            resultDescription: 'The dog agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        },
        monkey: {
            icon: '🐒',
            description: 'A monkey has Appeared',
            choices: [
                {
                    title: 'Battle',
                    text: 'take risks and get loot',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [5,0],
                            resultDescription: 'you become stronger.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-18,0],
                            resultDescription: 'You got injured.'
                        }
                    ],
                },
                {
                    title: 'Run away',
                    text: "stay alive and live on",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,-5],
                            resultDescription: 'you successfully ran away.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [-10,-5],
                            resultDescription: 'you managed to ran away, but you still got hurt'
                        }
                    ],
                },
                {
                    title: 'Be friend',
                    text: 'try to act friendly',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,5],
                            resultDescription: 'The monkey stare at you strangly but calmly'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -2,
                            resultDescription: 'The monkey agressively charge towards you, you had to run away.'
                        }
                    ],
                }
            ]
        }
    },
    weather: {
        sunny: {
            icon: '🌞',
            description: 'The Sun shines upon you',
            choices: [
                {
                    title: 'Receive radiant bless',
                    text: '?',
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [100,0],
                            resultDescription: 'BLESS RECEIVED.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [50,15],
                            resultDescription: 'BLESS RECEIVED.'
                        }
                    ],
                },
                {
                    title: 'Receive empowering bless',
                    text: "?",
                    outCome: [
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [0,100],
                            resultDescription: 'BLESSING RECEIVED.'
                        },
                        {
                            type: 'MODIFY_STATS',
                            baseValue: [25, 50],
                            resultDescription: 'BLESSING RECEIVED.'
                        }
                    ],
                }
            ]
        },
        rainbow: {
            icon: '🌈',
            description: 'you found a rare rainbow',
            choices: [
                {
                    title: 'Focused Mind',
                    text: '?',
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'direct-hit',
                            resultDescription: 'You received a special item.'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'hiking-boots',
                            resultDescription: 'you received a special item.'
                        }
                    ],
                },
                {
                    title: 'Couragous',
                    text: "?",
                    outCome: [
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'medal',
                            resultDescription: 'you recieved a special item'
                        },
                        {
                            type: 'ADD_ITEM',
                            baseValue: 'dagger',
                            resultDescription: 'you received a special item'
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
            description: 'taxi approches right next to you, the driver looks a little shady',
            choices: [
                {
                    title: 'Hire the taxi',
                    text: 'the taxi is able to take you anywhere you need to go',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 4,
                            resultDescription: 'the taxi drives you a distance before dropping you off.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -10,
                            resultDescription: 'driver is lost .'
                        }
                    ],
                },
                {
                    title: 'Walk Away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened'
                        }
                    ],
                }
            ]
        },
        bus: 
        {
            icon: '🚌',
            description: 'You arrive at a bus stop, and the bus is about to depart',
            choices: [
                {
                    title: 'Take the bus',
                    text: 'the bus is a little crowded',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 3,
                            resultDescription: 'the bus arrived at your stop.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -3,
                            resultDescription: 'passenger emergency.'
                        }
                    ],
                },
                {
                    title: 'Walk Away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened'
                        }
                    ],
                }
            ]
        },
        train: {
            icon: '🚆',
            description: 'You have arrived at the train station, the train is about to depart',
            choices: [
                {
                    title: 'Take the train',
                    text: 'a relatively reliable methods to get around the city',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 6,
                            resultDescription: 'the train arrived at your station.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -2,
                            resultDescription: 'mechanical problem and unexpected delay .'
                        }
                    ],
                },
                {
                    title: 'Walk Away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened'
                        }
                    ],
                }
            ]
        },
        airplane: {
            icon: '🛬',
            description: 'You have arrived at an private airport, the pilot is happy to take you anywhere',
            choices: [
                {
                    title: 'take the plane',
                    text: 'airplane can take you across great distances',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 12,
                            resultDescription: 'the plane safely landed.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 6,
                            resultDescription: 'unexpected weather condition lead to an early landing .'
                        }
                    ],
                },
                {
                    title: 'Walk Away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened'
                        }
                    ],
                }
            ]
        },
        rocket: {
            icon: '🚀',
            description: 'A rocket is about to launch',
            choices: [
                {
                    title: 'hold on to the rocket',
                    text: 'I have no idea where it will take me',
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 20,
                            resultDescription: 'you are on the other side of the earth, maybe.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: -20,
                            resultDescription: 'well, rocket did take you somewhere.'
                        }
                    ],
                },
                {
                    title: 'Walk Away',
                    text: "",
                    outCome: [
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened.'
                        },
                        {
                            type: 'MOVE',
                            baseValue: 0,
                            resultDescription: 'Nothing happened'
                        }
                    ],
                }
            ]
        }
    } 
}