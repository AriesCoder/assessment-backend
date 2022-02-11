const compliments = ["Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",]

const fortunes = ['A friend asks only for your time not your money.', 
        'A lifetime of happiness lies ahead of you.', 'A pleasant surprise is waiting for you.', 
        'A smile is your personal welcome mat.', 
        'A truly rich life contains love and art in abundance.', 
        'All your hard work will soon pay off.' ] 

const valentineMsgs = ["I'm yours. Sorry, no refunds or exchanges.", 
        "Besides cheese, you are my favorite", 
        "Happy Valentine's Day! Nothing says love like a piece of paper folded in half with some words on it", 
        "If you were a vegetable you'd be a cutecumber.", 
        "I know loving me isn't always the easiest. But trust me, I'm worth it."]

const newYearWishes = ["Here's to another year full of joy, laughter, and unforgettable memories with an unforgettable friend!",
        'Let this year be the year you go after progress over perfection and savor every victory you make along the way to your goals.', 
        'Wishing you and your family health, happiness, and prosperity in the new year.', 
        'You deserve all the best: May all your wishes come true in 2022!']

const zodiacSigns = {Aries: "Aries: The first sign of the zodiac, Aries loves to be number one. Naturally, this dynamic fire sign is no stranger to competition. Bold and ambitious, Aries dives headfirst into even the most challenging situations—and they'll make sure they always come out on top! ",
        Taurus: "Taurus: What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread? Why Taurus, of course! Taurus is an earth sign represented by the bull. Like their celestial spirit animal, Taureans enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors. ",
        Gemini: "Gemini: Have you ever been so busy that you wished you could clone yourself just to get everything done? That's the Gemini experience in a nutshell. Spontaneous, playful, and adorably erratic, Gemini is driven by its insatiable curiosity. Appropriately symbolized by the celestial twins, this air sign was interested in so many pursuits that it had to double itself. You know, NBD!",
        Cancer: "Cancer: Represented by the crab, Cancer seamlessly weaves between the sea and shore representing Cancer’s ability to exist in both emotional and material realms. Cancers are highly intuitive and their psychic abilities manifest in tangible spaces. But—just like the hard-shelled crustaceans—this water sign is willing to do whatever it takes to protect itself emotionally. In order to get to know this sign, you're going to need to establish trust!",
        Leo: "Leo: Roll out the red carpet because Leo has arrived. Passionate, loyal, and infamously dramatic, Leo is represented by the lion and these spirited fire signs are the kings and queens of the celestial jungle. They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, Leos love to bask in the spotlight and celebrate… well, themselves.",
        Virgo: `Virgo: You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is the Virgo anthem. Virgos are logical, practical, and systematic in their approach to life. Virgo is an earth sign historically represented by the goddess of wheat and agriculture, an association that speaks to Virgo's deep-rooted presence in the material world. This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.`,
        Libra: "Libra: Balance, harmony, and justice define Libra energy. As a cardinal air sign, Libra is represented by the scales (interestingly, the only inanimate object of the zodiac), an association that reflects Libra's fixation on establishing equilibrium. Libra is obsessed with symmetry and strives to create equilibrium in all areas of life — especially when it comes to matters of the heart.",
        Scorpio: "Scorpio: Elusive and mysterious, Scorpio is one of the most misunderstood signs of the zodiac. Scorpio is a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms. In fact, Scorpio derives its extraordinary courage from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac.",
        Sagittarius: "Sagittarius: Oh, the places Sagittarius goes! But… actually. This fire sign knows no bounds. Represented by the archer, Sagittarians are always on a quest for knowledge. The last fire sign of the zodiac, Sagittarius launches its many pursuits like blazing arrows, chasing after geographical, intellectual, and spiritual adventures.",
        Capricorn: "Capricorn: What is the most valuable resource? For Capricorn, the answer is clear: Time. Capricorn is climbing the mountain straight to the top and knows that patience, perseverance, and dedication is the only way to scale. The last earth sign of the zodiac, Capricorn, is represented by the sea-goat, a mythological creature with the body of a goat and the tail of a fish. Accordingly, Capricorns are skilled at navigating both the material and emotional realms.",
        Aquarius: `Aquarius: Despite the "aqua" in its name, Aquarius is actually the last air sign of the zodiac. Innovative, progressive, and shamelessly revolutionary, Aquarius is represented by the water bearer, the mystical healer who bestows water, or life, upon the land. Accordingly, Aquarius is the most humanitarian astrological sign. At the end of the day, Aquarius is dedicated to making the world a better place`,
        Pisces: `Pisces: If you looked up the word "psychic" in the dictionary, there would definitely be a picture of Pisces next to it. Pisces is the most intuitive, sensitive, and empathetic sign of the entire zodiac — and that’s because it’s the last of the last. As the final sign, Pisces has absorbed every lesson — the joys and the pain, the hopes and the fears — learned by all of the other signs. It's symbolized by two fish swimming in opposite directions, representing the constant division of Pisces' attention between fantasy and reality. `
        }

module.exports = {
    getCompliment: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment)
        },
    getFortune: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
        
        res.status(200).send(randomFortune)
        },
    getValentineMsg: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * valentineMsgs.length);
        let randomMsg = valentineMsgs[randomIndex];
        
        res.status(200).send(randomMsg)
        },
    getNYWish: (req, res) => {
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * newYearWishes.length);
        let randomWish = newYearWishes[randomIndex];
        
        res.status(200).send(randomWish)
        },
    getZodSign: (req, res) => {
        // choose random compliment
        let {value} = req.params
        let message = zodiacSigns[value]
        res.status(200).send(message);
    }
    
}