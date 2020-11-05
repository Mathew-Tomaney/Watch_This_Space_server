use solarsystem
db.dropDatabase()

// info from here: https://solarsystem.nasa.gov/solar-system/our-solar-system/overview/ & https://github.com/mawais54013/Solar-System/blob/master/index.js

db.planets.insertMany([
    {
        name: "Sun",
        img: 'https://spaceplace.nasa.gov/sun-compare/en/PIA03149.en.jpg',
        description: "The Sun is a yellow dwarf star, a hot ball of glowing gases at the heart of our solar system.",
            funFacts: {
                moons: "0",
                yearLength: "230 million Earth years",
                gravity: "28 times stronger than Earth",
                planetType: "Yellow Dwarf",
                temperature: "5538°C",

            },    
            quiz: {
                questions: [
                    {
                        question: "What type of Planet is the Sun?",
                        answer: "Yellow Dwarf",
                        wrong: ["Ice Giant", "Gas Giant"]
                    },
                    {
                        question: "How many moons does the Sun have?",
                        answer: "0 moons",
                        wrong: ["79 moons", "62 moons"]
                    },
                    {
                        question: "What is the temperature on the Sun?",
                        answer: "5538°C",
                        wrong: ["-201°C", "-108°C"]
                    }
                ]
            },
            isPlanet: false   
    },
    {
        name: "Mercury",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/2_feature_1600x900_mercury.jpg",
        description: "The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth's Moon."
        ,
        radius: 1516,
            funFacts: {
                moons: "0",
                yearLength: "88 Earth days",
                oneEarthDay: "59 Earth days",
                distanceFromSun: "39.704 million miles",
                gravity: "87 times weaker than the force of gravity on the surface of the Earth",
                planetType: "Terrestrial",
                temperature: "Temperatures are extreme, around 430°C during the day.",
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
                            question: "What is the temperature on Mercury?",
                            answer: "430°C / -180°C",
                            wrong: ["-195°C", "-138°C"]
                        }
                    ]
                },
                isPlanet: true
    },
    {
        name: "Venus",
        img: "https://solarsystem.nasa.gov/system/downloadable_items/1082_PIA00271_detail.jpg",
        description: "Second planet from the Sun and our closest planetary neighbour, Venus is similar in structure and size to Earth.",
        radius: 3760,
            funFacts: {
                moons: "0",
                yearLength: "225 Earth days",
                oneEarthDay: "243 Earth days",
                distanceFromSun: "67 million miles", 
                gravity: "almost the same as Earth",
                planetType: "Terrestrial",
                temperature: "471°C"
            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Venus from the Sun?",
                        answer: "67 million miles",
                        wrong: ["39.704 million miles", "484 million miles"]
                    },
                    {
                        question: "How many moons does Venus have?",
                        answer: "0 moons",
                        wrong: ["27 moons", "2 moon"]
                    },
                    { 
                        question: "What is the temperature on Venus?",
                        answer: "471°C",
                        wrong: ["-201°C", "16°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Earth",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/4_earth.jpg",
        description: "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.",
        radius: 3958,
            funFacts: {
                moons: "1",
                yearLength: "365 days",
                oneEarthDay: "24 hours",
                distanceFromSun: "93 million miles", 
                gravity: "9.8 m/s",
                planetType: "Terrestrial",
                temperature: "16°C"
            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Earth from the Sun?",
                        answer: "93 million miles",
                        wrong: ["142 million miles", "2.795 billion miles"]
                    },
                    {
                        question: "How many moons does Earth have?",
                        answer: "1 moons",
                        wrong: ["79 moons", "2 moons"]
                    },
                    { 
                        question: "What is the average global land and sea temperature on Earth?",
                        answer: "16°C",
                        wrong: ["-138°C", "471°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Mars",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/edu_what_is_mars.jpg",
        description: "The fourth planet from the Sun, Mars is a dusty, cold, desert world with a very thin atmosphere.",
        radius: 2106,
            funFacts: {
                moons: "2",
                yearLength: "687 Earth days",
                oneEarthDay: "24.6 hours",
                distanceFromSun: "142 million miles",
                gravity: "3 times weaker than Earth",
                planetType: "Terrestrial",
                temperature: "-28°C"
            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Mars from the Sun?",
                        answer: "142 million miles",
                        wrong: ["929 million miles", "67 million miles"]
                    },
                    {
                        question: "How many moons does Mars have?",
                        answer: "2 moons",
                        wrong: ["1 moons", "79 moons"]
                    },
                    { 
                        question: "What is the temperature on Mars?",
                        answer: "-28°C",
                        wrong: ["-108°C", "16°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Jupiter",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/hs-2016-24-a-print-new.jpg",
        description: "Jupiter is the fifth planet from our Sun and is the largest planet in the solar system – more than twice the size as all the other planets combined! Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years. Jupiter also has several rings.",
        radius: 3760,
            funFacts: {
                moons: "79",
                yearLength: "4,380 Earth days",
                oneEarthDay: "10 hours",
                distanceFromSun: "484 million miles",
                gravity: "2.4 times stronger than Earth",
                planetType: "Gas Giant",
                temperature: "-108°C"
            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Jupiter from the Sun?",
                        answer: "484 million miles",
                        wrong: ["93 million miles", "39.704 million miles"]
                    },
                    {
                        question: "How many moons does Jupiter have?",
                        answer: "79 moons",
                        wrong: ["0 moons", "62 moons"]
                    },
                    { 
                        question: "What is the temperature on Jupiter?",
                        answer: "-108°C",
                        wrong: ["-138°C", "-201°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Saturn",
        img: "https://solarsystem.nasa.gov/system/resources/detail_files/14379_IMG003379.jpg",
        description: "Saturn is the sixth planet from the Sun and the second largest planet in our solar system. Saturn is adorned with a dazzling system of icy rings.",
        radius: 36183,
            funFacts: {
                moons: "62",
                yearLength: "10,759 Earth days",
                oneEarthDay: "10.7 hours",
                distanceFromSun: "929 million miles", 
                gravity: "Almost the same as Earth",
                planetType: "Gas Giant",
                temperature: "-138°C"
            },
            quiz: {
                questions: [
                    { 
                        question: "How far is Saturn from the Sun?",
                        answer: "929 million miles",
                        wrong: ["39.704 million miles", "2.795 billion miles"]
                    },
                    {
                        question: "How many moons does Saturn have?",
                        answer: "62 moons",
                        wrong: ["1 moons", "0 moons"]
                    },
                    { 
                        question: "What is the temperature on Saturn?",
                        answer: "-138°C",
                        wrong: ["16°C", "-108°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Uranus",
        img: "https://www.nasa.gov/sites/default/files/thumbnails/image/pia18182-16.jpg",
        description: "The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy.",
        radius: 15759,
            funFacts: {
                moons: "27",
                yearLength: "30,687 Earth days",
                oneEarthDay: "17.25 hours",
                distanceFromSun: "1.783 billion miles", 
                gravity: "Amost the same as Earth",
                planetType: "Ice Giant",
                temperature: "-195°C"
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
                        question: "What is the temperature on Uranus?",
                        answer: "-195°C",
                        wrong: ["-201°C", "-108°C"]
                    }
                ]
            },
            isPlanet: true
    },
    {
        name: "Neptune",
        img: "https://solarsystem.nasa.gov/system/stellar_items/image_files/90_feature_1600x900_4.jpg",
        description: "Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.",
        radius: 15299,
            funFacts: {
                moons: "14",
                yearLength: "60,190 Earth days",
                oneEarthDay: "16 hours",
                distanceFromSun: "2.795 billion miles", 
                gravity: "Almost the same as Earth",
                planetType: "Ice Giant",
                temperature: "-201°C"
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
                        question: "What is the temperature on Neptune?",
                        answer: "-201° C",
                        wrong: ["16°C", "5538°C"]
                    }
                ]
            },
            isPlanet: true
    }
])



// Temperature Data:
// https://solarsystem.nasa.gov/resources/681/solar-system-temperatures/#:~:text=The%20average%20temperatures%20of%20planets,%C2%B0F%20(16%C2%B0C)