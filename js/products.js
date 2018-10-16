var products = [
    {   
        image: "idk man.jpg",
        title: "idk man",
        price: "10",
        sizes: ["L"],
        description: "A candle designed for the undecided",
        colors: ["black"],
        materials: ["10% wick","90% wax"],
        brand: "Edge",
        categories: ["Black","Edge lord","Simple"],
        product_id: "C1900"
    },
    {
        image: "Mother of Pearl.jpg",
        title: "Mother of Pearl",
        price: "15",
        sizes: ["S"],
        description: "A candle that represents the Mother of All Pearls",
        colors: ["Pearl White"],
        materials: ["10% wick","20% pearls","70% wax"],
        brand: "Waxxy",
        categories: ["White","Fancy"],
        product_id: "C1800"
    },
    {
        image:"The Fire Within.jpg",
        title: "The Fire Within",
        price: "11",
        sizes: ["S","M","L"],
        description: "Use this candle to bring the fire within out",
        colors: ["Red"],
        materials: ["10% wood","90% wax"],
        brand: "Woodwick",
        categories: ["Red","Simple"],
        product_id: "C1700"
    },
    {
        image:"Tiger Lily.jpg",
        title: "Tiger Lily",
        price: "10.50",
        sizes: ["S","L"],
        description: "Imagine the color of a freshly blooming tiger lily",
        colors: ["light orange"],
        materials: ["10% wood","90% wax"],
        brand: "Woodwick",
        categories: ["Orange","Floral","Simple"],
        product_id: "C1600"
    },
    {
        image:"Young Moss.jpg",
        title: "Young Moss",
        price: "10.50",
        sizes: ["S","L"],
        description: "Spring has sprung with this mossy candle",
        colors: ["moss green"],
        materials: ["10% wood","90% wax"],
        brand: "Waxxy",
        categories: ["Green","Floral","Simple"],
        product_id: "C1500"
    },
    {
        image:"Shrek Swamp.jpg",
        title: "Shrek Swamp",
        price: "10",
        sizes: ["L"],
        description: "This is Shrek's swamp all in one candle",
        colors: ["swamp green"],
        materials: ["10% wood","90% wax"],
        brand: "Edge",
        categories: ["Green","Edge lord","Simple"],
        product_id: "C1400"
    },
    {
        image:"Blood Drips.jpg",
        title: "Blood Drips",
        price: "14.50",
        sizes: ["S"],
        description: "A candle that drips blood",
        colors: ["white and red"],
        materials: ["10% wood","90% wax"],
        brand: "Spookz",
        categories: ["Blood","White","Halloween"],
        product_id: "C1300"
    },
    {
        image:"skullz.jpg",
        title: "skullz",
        price: "15",
        sizes: ["M"],
        description: "Be Hamlet with this candle",
        colors: ["mystery"],
        materials: ["10% wick","20% bones","70% wax"],
        brand: "Spookz",
        categories: ["Halloween","Edge lord","Grey"],
        product_id: "C1200"
    },
    {
        image:"Kitty Skull.jpg",
        title: "Kitty Skull",
        price: "14.50",
        sizes: ["S"],
        description: "It's a cat skull, not for the faint of heart",
        colors: ["yellow"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Spookz",
        categories: ["Halloween","Yellow","Edge lord"],
        product_id: "C1100"
    },
    {
        image:"Spider Legs.jpg",
        title: "Spider Legs",
        price: "13.50",
        sizes: ["L"],
        description: "Long spider legs",
        colors: ["black"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Edge",
        categories: ["Black","Simple"],
        product_id: "C1150"
    },
    {
        image:"The Tombs.jpg",
        title: "The Tombs",
        price: "14.50",
        sizes: ["M","L"],
        description:"It's just like in the tombs",
        colors: ["grey"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Spookz",
        categories: ["Halloween","Edge lord"],
        product_id: "C1090"
    },
    {
        image:"Liquid Blood.jpg",
        title: "Liquid Blood",
        price: "16",
        sizes: ["S"],
        description: "It's almost like real blood",
        colors: ["red"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Spookz",
        categories: ["Halloween","Fancy","Blood"],
        product_id: "C1080"
    },
    {
        image:"Small Ones.jpg",
        title: "Small Ones",
        price: "8.50",
        sizes: ["S"],
        description: "A group of small candles",
        colors: ["black"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Waxxy",
        categories: ["Halloween","Simple","Black"],
        product_id: "C1070"
    },
    {
        image:"Red Rose.jpg",
        title: "Red Rose",
        price: "10",
        sizes: ["S","M","L"],
        description: "The color of deep, red, rose",
        colors: ["red"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Woodwick",
        categories: ["Simple","Red","Floral"],
        product_id: "C1060"
    },
    {
        image:"Blue Lagoon.jpg",
        title: "Blue Lagoon",
        price: "10.50",
        sizes: ["S","M","L"],
        description: "Made from the depths of the chillest lagoon",
        colors: ["blue"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Waxxy",
        categories: ["Blue","Simple"],
        product_id: "C1050"
    },
    {
        image:"Periwinkle.jpg",
        title: "Periwinkle",
        price: "10.50",
        sizes: ["S","L"],
        description: "Imagine the palest of blues but in candle form",
        colors: ["blue"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Woodwick",
        categories: ["Floral","Simple"],
        product_id: "C1040"
    },
    {
        image:"Fresh Grass.jpg",
        title: "Fresh Grass",
        price: "10",
        sizes: ["S","M","L"],
        description: "Who doesn't like freshly cut grass",
        colors: ["green"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Woodwick",
        categories: ["Floral","Simple"],
        product_id: "C1030"
    },
    {
        image:"Spoopy Pumps.jpg",
        title: "Spoopy Pumps",
        price: "13.50",
        sizes: ["S"],
        description: "Just some cute spoopy pumkins",
        colors: ["orange"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Spookz",
        categories: ["Halloween","Edge lord"],
        product_id: "C1020"
    },
    {
        image:"Lilac.jpg",
        title: "Lilac",
        price: "10.50",
        sizes: ["S","L"],
        description: "Some nice lilac smelling candles",
        colors: ["Purple"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Woodwick",
        categories: ["Floral","Simple"],
        product_id: "C1010"
    },
    {
        image:"Ghosties.jpg",
        title: "Ghosties",
        price: "13.75",
        sizes: ["S"],
        description: "Some cute ghosts that want to be your friend",
        colors: ["white"],
        materials: ["20% wood","40% scent","40% wax"],
        brand: "Spookz",
        categories: ["Halloween","Simple","White"],
        product_id: "C1009"
    },
];