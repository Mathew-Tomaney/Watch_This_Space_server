use solarsystem
db.dropDatabase()

// info from here: https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/ & https://github.com/mawais54013/Solar-System/blob/master/index.js

db.planets.insertMany([
    {
        name: "Sun",
        img: 'https://spaceplace.nasa.gov/sun-compare/en/PIA03149.en.jpg',
        description: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system. Its gravity holds the solar system together, keeping everything – from the biggest planets to the smallest particles of debris – in its orbit. The connection and interactions between the Sun and Earth drive the seasons, ocean currents, weather, climate, radiation belts and auroras. Though it is special to us, there are billions of stars like our Sun scattered across the Milky Way galaxy.",
            funFacts: {
                moons: "0",
                yearLength: "230 million earth years",
                gravity: "28 times stronger than Earth",
                planetType: "Yellow Dwarf",
                temperature: "5538 degrees celsius",

            },    
            isPlanet: false   
    },
    {
        name: "Mercury",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg",
        description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earths Moon. From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system",
        radius: 1516,
            funFacts: {
                moons: "0",
                yearLength: "88 Earth days",
                oneEarthDay: "59 Earth days",
                distanceFromSun: "39.704 million miles",
                gravity: "87 times weaker than the force of gravity on the surface of the Earth",
                planetType: "Terrestrial",
                temperature: "Temperatures are extreme, both hot and cold 800 degrees Fahrenheit /  430 degrees Celsius, during the day. Because the planet has no atmosphere to retain that heat, nighttime temperatures on the surface can drop to  -290 degrees Fahrenheit /  -180 degrees Celsius.",
                // orbitVelocity: "170,503 km/h"
                },
            quiz: {
                    questions: [
                        {
                            question: "How far is Mercury from the sun?",
                            answer: "39.704 million miles",
                            wrong: ["93 million miles", "67 million miles"]
                        },
                        {
                            question: "How many moons does Mercury have?",
                            answer: "0 moons",
                            wrong: ["79 moons", "2 moons"]
                        },
                        {
                            question: "How many Earth days are there in one year on Mercury?",
                            answer: "88 Earth days",
                            wrong: ["30,687 Earth days", "10,759 Earth days"]
                        }
                    ]
                    // moons: "No Moons",
                    // yearLength: "One year is 88 Earth days",
                    // oneEarthDay: "One day is 59 Earth days",
                    // distanceFromSun: "36 million miles",
                    // gravity: "87 times weaker than Earths gravity",
                    // planetType: "Terrestrial",
                    // temperature: "430° celsius / -180 celsius",
                    // orbitVelocity: "170,530 km/h"
                },
                isPlanet: true
    },
    {
        name: "Venus",
        img: "https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg",
        description: "Second planet from the Sun and our closest planetary neighbour, Venus is similar in structure and size to Earth, but it is now a very different world. Venus spins slowly in the opposite direction most planets do. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system—with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains",
        radius: 3760,
            funFacts: {
                moons: "0",
                yearLength: "225 Earth days",
                oneEarthDay: "243 Earth days",
                distanceFromSun: "67 million miles", 
                gravity: "Almost the same as Earth",
                planetType: "Terrestrial",
                temperature: "471° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Venus from the sun?",
                        answer: "67 million miles",
                        wrong: ["39.704 million miles", "484 million miles"]
                    },
                    {
                        question: "How many moons does Venus have?",
                        answer: "0 moons",
                        wrong: ["27 moons", "2 moon"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Venus?",
                        answer: "225 Earth days",
                        wrong: ["60,190 Earth days", "1 Earth day"]
                    }
                ]
            // quizFacts: {
            //     moons: "No Moons",
            //     yearLength: "One Year is 225 Earth days",
            //     oneEarthDay: "One day is 243 Earth days",
            //     distanceFromSun: "67 million miles", 
            //     gravity: "Almost the same as Earth",
            //     planetType: "Terrestrial",
            //     temperature: "471° celsius"
                // orbitVelocity: ""
            // }
            },
            isPlanet: true
    },
    {
        name: "Earth",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg",
        description: "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things. While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal",
        radius: 3958,
            funFacts: {
                moons: "1",
                yearLength: "365 days",
                oneEarthDay: "24 hours",
                distanceFromSun: "93 million miles", 
                gravity: "9.8 m/s",
                planetType: "Terrestrial",
                temperature: "16° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Earth from the sun?",
                        answer: "93 million miles",
                        wrong: ["142 million miles", "2.795 billion miles"]
                    },
                    {
                        question: "How many moons does Earth have?",
                        answer: "1 moons",
                        wrong: ["79 moons", "2 moons"]
                    },
                    { 
                        question: "How many days are there in one year on Earth?",
                        answer: "365 days",
                        wrong: ["10,759 days", "225 days"]
                    }
                ]
            // quizFacts: {
            //     moons: "1 Moon",
            //     yearLength: "One year is 365 Earthdays",
            //     oneEarthDay: "One day is 24 hours",
            //     distanceFromSun: "93 million miles", 
            //     gravity: "9.8 m/s",
            //     planetType: "Terrestrial",
            //     temperature: "16° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    },
    {
        name: "Mars",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_mars.jpg",
        description: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere. This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past",
        radius: 2106,
            funFacts: {
                moons: "2",
                yearLength: "687 Earth days",
                oneEarthDay: "24.6 hours",
                distanceFromSun: "142 million miles",
                gravity: "3 times weaker than Earth",
                planetType: "Terrestrial",
                temperature: "-28° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Mars from the sun?",
                        answer: "142 million miles",
                        wrong: ["929 million miles", "67 million miles"]
                    },
                    {
                        question: "How many moons does Mars have?",
                        answer: "2 moons",
                        wrong: ["1 moons", "79 moons"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Mars?",
                        answer: "687 Earth days",
                        wrong: ["4,380 Earth days", "488 Earth days"]
                    }
                ]
            // quizFacts: {
            //     moons: "2 Moons",
            //     yearLength: "One year is 687 Earth days",
            //     oneEarthDay: "One day is 24.6 Earth hours",
            //     distanceFromSun: "142 million miles", 
            //     gravity: "3.71 m/s",
            //     planetType: "Terrestrial",
            //     temperature: "-28° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    },
    {
        name: "Jupiter",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hs-2016-24-a-print-new.jpg",
        description: "Jupiter is the fifth planet from our Sun and is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined. Jupiters stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter is surrounded by dozens of moons. Jupiter also has several rings, but unlike the famous rings of Saturn, Jupiter’s rings are very faint and made of dust, not ice.",
        radius: 3760,
            funFacts: {
                moons: "79",
                yearLength: "4,380 Earth days",
                oneEarthDay: "10 hours",
                distanceFromSun: "484 million miles",
                gravity: "2.4 times stronger than Earth",
                planetType: "Gas Giant",
                temperature: "-108° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Jupiter from the sun?",
                        answer: "484 million miles",
                        wrong: ["93 million miles", "39.704 million miles"]
                    },
                    {
                        question: "How many moons does Jupiter have?",
                        answer: "79 moons",
                        wrong: ["0 moons", "62 moons"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Jupiter?",
                        answer: "4,380 Earth days",
                        wrong: ["10,759 Earth days", "60,190 Earth days"]
                    }
                ]
            // quizFacts: {
            //     moons: "79 moons",
            //     yearLength: "One year is 4,380 Earth days",
            //     oneEarthDay: "One day is 10 hours",
            //     distanceFromSun: "484 million miles",
            //     gravity: "24.79 m/s",
            //     planetType: "Gas Giant",
            //     temperature: "-108° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    },
    {
        name: "Saturn",
        img: "https://solarsystem.nasa.gov/system/resources/detail_files/14379_IMG003379.jpg",
        description: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Adorned with a dazzling system of icy rings, Saturn is unique among the planets. It is not the only planet to have rings, but none are as spectacular or as complex as Saturns. Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium. Surrounded by more than 60 known moons, Saturn is home to some of the most fascinating landscapes in our solar system. From the jets of water that spray from Enceladus to the methane lakes on smoggy Titan, the Saturn system is a rich source of scientific discovery and still holds many mysteries",
        radius: 36183,
            funFacts: {
                moons: "62",
                yearLength: "10,759 Earth days",
                oneEarthDay: "10.7 hours",
                distanceFromSun: "929 million miles", 
                gravity: "Almost the same as Earth",
                planetType: "Gas Giant",
                temperature: "-138° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Saturn from the sun?",
                        answer: "929 million miles",
                        wrong: ["39.704 million miles", "2.795 billion miles"]
                    },
                    {
                        question: "How many moons does Saturn have?",
                        answer: "62 moons",
                        wrong: ["1 moons", "0 moons"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Saturn?",
                        answer: "10,759 Earth days",
                        wrong: ["1 Earth day", "4,380 Earth days"]
                    }
                ]
            // quizFacts: {
            //     moons: "62 moons",
            //     yearLength: "One year is 10,759 Earth days",
            //     oneEarthDay: "One day is 10.7 hours",
            //     distanceFromSun: "929 million miles", 
            //     gravity: "10.4 m/s",
            //     planetType: "Gas Giant",
            //     temperature: "-138° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    },
    {
        name: "Uranus",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-16.jpg",
        description: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.",
        radius: 15759,
            funFacts: {
                moons: "27",
                yearLength: "30,687 Earth days",
                oneEarthDay: "17.25 hours",
                distanceFromSun: "1.783 billion miles", 
                gravity: "Amost the same as Earth",
                planetType: "Ice Giant",
                temperature: "-195° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Uranus from the sun?",
                        answer: "1.783 billion miles",
                        wrong: ["142 million miles", "39.704 million miles"]
                    },
                    {
                        question: "How many moons does Uranus have?",
                        answer: "27 moons",
                        wrong: ["0 moons", "14 moons"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Uranus?",
                        answer: "30,687 Earth days",
                        wrong: ["488 Earth days", "4,380 Earth day"]
                    }
                ]
            // quizFacts: {
            //     moons: "27 moons",
            //     yearLength: "One year is 30,687 Earth days",
            //     oneEarthDay: "One day is 17.25 hours",
            //     distanceFromSun: "1.783 billion miles", 
            //     gravity: "8.87 m/s",
            //     planetType: "Ice Giant",
            //     temperature: "-195° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    },
    {
        name: "Neptune",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/90_feature_1600x900_4.jpg",
        description: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system. More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846. Neptune is so far from the Sun that high noon on the big blue planet would seem like dim twilight to us. The warm light we see here on our home planet is roughly 900 times as bright as sunlight on Neptune.",
        radius: 15299,
            funFacts: {
                moons: "14",
                yearLength: "60,190 Earth days",
                oneEarthDay: "16 hours",
                distanceFromSun: "2.795 billion miles", 
                gravity: "Almost the same as Earth",
                planetType: "Ice Giant",
                temperature: "-201° celsius"
                // orbitVelocity: ""

            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Neptune from the sun?",
                        answer: "2.795 billion miles",
                        wrong: ["1.783 billion miles", "929 million miles"]
                    },
                    {
                        question: "How many moons does Neptune have?",
                        answer: "14 moons",
                        wrong: ["1 moons", "79 moons"]
                    },
                    { 
                        question: "How many Earth days are there in one year on Neptune?",
                        answer: "60,190 Earth days",
                        wrong: ["1 Earth day", "488 Earth days"]
                    }
                ]
            // quizFacts: {
            //     moons: "14 moons",
            //     yearLength: "One year is 60,190 Earth days",
            //     oneEarthDay: "One day is 16 hours",
            //     distanceFromSun: "2.795 billion miles", 
            //     gravity: "11.15 m/s",
            //     planetType: "Ice Giant",
            //     temperature: "-201° celsius"
                // orbitVelocity: ""
            },
            isPlanet: true
    }
    // {
    //     name: "Pluto",
    //     img: ".jpg"
    //     description: "",
    //     radius: 3760
    //         funFacts: {
    //             moons: "0",
    //             yearLength: "",
    //             oneEarthDay: "",
    //             distanceFromSun: "" 
    //             gravity: "",
    //             planetType: "",
    //             temperature: ""
    //             orbitVelocity: ""

    //         }
    //         quizFacts: {
    //             moons: "0",
    //             yearLength: "",
    //             oneEarthDay: "",
    //             distanceFromSun: "" 
    //             gravity: "",
    //             planetType: "",
    //             temperature: ""
    //             orbitVelocity: ""
    //         }
    // }
])



// Temperature Data:
// https://solarsystem.nasa.gov/resources/681/solar-system-temperatures/#:~:text=The%20average%20temperatures%20of%20planets,%C2%B0F%20(16%C2%B0C)