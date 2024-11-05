import "dotenv/config.js"
import "../../config/db.js"
import Itinerary from "../Itinerary.js";


const itineraries = [
    // New York City
    {
        title: "Art in NYC",
        photo: "https://images.unsplash.com/photo-1550869706-c57d6b364847?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Sarah Johnson",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6hv-ibDquQhfMeJZVxUiJ9jEXe1HjLITzQ&s",
        duration: 3,
        like: 0,
        price: 210,
        hashtags: ["#NewYork", "#Art", "#Culture"],
        city: "67257fac3c9f177051768768" // New York City
    },
    {
        title: "New York Nightlife",
        photo: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Michael Thompson",
        authorPhoto: "https://pbs.twimg.com/profile_images/1591655683296227333/Fb13d4za_400x400.jpg",
        duration: 4,
        like: 0,
        price: 250,
        hashtags: ["#NewYork", "#Nightlife", "#Party"],
        city: "67257fac3c9f177051768768" // New York City
    },
    {
        title: "Food Tour of New York",
        photo: "https://cdn.vox-cdn.com/thumbor/-uVL0AKQn7Zt7fdwNnlsmRueTyA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/25132214/SBpoupay.jpeg",
        author: "Jane Smith",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYR0TAT4xCZgg-7cvDs2gH02sMGHAIbFDYQ&s",
        duration: 2,
        like: 0,
        price: 150,
        hashtags: ["#Food", "#NewYork", "#Cuisine"],
        city: "67257fac3c9f177051768768" // New York City
    },

    // Tokyo
    {
        title: "Shopping in Tokyo",
        photo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Hana Sato",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpredWdc-zwVNhcx475VKlqywW7jIsZxgVdcxM8RwdU9nwEkbCEUtlQJBOup35TdEjWU&usqp=CAU",
        duration: 3,
        like: 0,
        price: 220,
        hashtags: ["#Tokyo", "#Shopping", "#Fashion"],
        city: "67257fac3c9f177051768769" // Tokyo
    },
    {
        title: "Tokyo Night Views",
        photo: "https://images.unsplash.com/photo-1580427221724-8cac34179310?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Riku Yamamoto",
        authorPhoto: "https://static.wikia.nocookie.net/ebidan/images/8/8f/Shigariku_sq.jpg/revision/latest/thumbnail/width/360/height/450?cb=20240819133917",
        duration: 4,
        like: 0,
        price: 280,
        hashtags: ["#Tokyo", "#NightViews", "#Photography"],
        city: "67257fac3c9f177051768769" // Tokyo
    },
    {
        title: "Tokyo Adventure",
        photo: "https://images.unsplash.com/photo-1590401939533-2e990cbce326?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Akira Tanaka",
        authorPhoto: "https://www.bmia.or.jp/wp/wp-content/uploads/2022/07/285bf2dd3ddf360967b70fbd862ec118.jpg",
        duration: 5,
        like: 0,
        price: 300,
        hashtags: ["#Tokyo", "#Japan", "#Culture"],
        city: "67257fac3c9f177051768769" // Tokyo
    },
    {
        title: "Cultural Journey in Tokyo",
        photo: "https://images.unsplash.com/photo-1617870314635-fc819547ec11?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Yuki Nakamura",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl6T6YkwwQcWsCNWnLYxkTi7s5bkXMvTnPPw&s",
        duration: 4,
        like: 0,
        price: 250,
        hashtags: ["#Tokyo", "#Culture", "#History"],
        city: "67257fac3c9f177051768769" // Tokyo
    },

    // Rome
    {
        title: "Rome's Hidden Gems",
        photo: "https://images.unsplash.com/photo-1598258500419-5d7895465a20?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Francesca Romano",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwM16lXAPAHH5eTNWlxfaUQFhavnNwDnAPSQ&s",
        duration: 2,
        like: 0,
        price: 180,
        hashtags: ["#Rome", "#HiddenGems", "#Travel"],
        city: "67257fac3c9f17705176876d" // Rome
    },
    {
        title: "Rome Day Trip",
        photo: "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Antonio Giordano",
        authorPhoto: "https://ucmscdn.healthgrades.com/cf/98/4398178f4861af1f3adb9a328a67/1500x2100.jpg",
        duration: 3,
        like: 0,
        price: 200,
        hashtags: ["#Rome", "#DayTrip", "#Travel"],
        city: "67257fac3c9f17705176876d" // Rome
    },
    {
        title: "Rome in a Weekend",
        photo: "https://images.unsplash.com/photo-1548585742-1df49e753a83?q=80&w=1177&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Mario Rossi",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBQPKeDH-OOyhl0ZpEdzeP10lquyYPKeOgDA&s",
        duration: 2,
        like: 0,
        price: 180,
        hashtags: ["#Rome", "#Italy", "#Travel"],
        city: "67257fac3c9f17705176876d" // Rome
    },
    {
        title: "Historical Rome",
        photo: "https://images.unsplash.com/photo-1491566102020-21838225c3c8?q=80&w=961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Giulia Bianchi",
        authorPhoto: "https://images.squarespace-cdn.com/content/v1/56858337cbced60d3b293aef/1632864515151-T5077LN9WYTHIC4OK048/Albumism_Giulia_Bianchi_MainImage.jpg",
        duration: 4,
        like: 0,
        price: 220,
        hashtags: ["#Rome", "#History", "#Culture"],
        city: "67257fac3c9f17705176876d" // Rome
    },
    {
        title: "Culinary Delights in Rome",
        photo: "https://images.unsplash.com/photo-1590691105234-1501411df02e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Luca Verdi",
        authorPhoto: "https://teatripiacenza.it/wp-content/uploads/2021/07/Luca-Salsi_%C2%A9MarcoBorrelli_-1.jpg",
        duration: 3,
        like: 0,
        price: 210,
        hashtags: ["#Rome", "#Food", "#Travel"],
        city: "67257fac3c9f17705176876d" // Rome
    },

    // London
    {
        title: "Hidden London",
        photo: "https://images.unsplash.com/photo-1519555045587-31b4a4bfdc26?q=80&w=1101&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Oliver Twist",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/3/38/Jamie_Oliver_%28cropped%29.jpg",
        duration: 3,
        like: 0,
        price: 230,
        hashtags: ["#London", "#Hidden", "#Exploration"],
        city: "67257fac3c9f177051768770" // London
    },
    {
        title: "London Parks and Gardens",
        photo: "https://images.unsplash.com/photo-1557835380-c6f389383cfa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Emma Watson",
        authorPhoto: "https://img1.wsimg.com/isteam/ip/3da66638-5399-4fdd-922e-3fb2083a39e6/1682164591544.jpg",
        duration: 4,
        like: 0,
        price: 190,
        hashtags: ["#London", "#Parks", "#Nature"],
        city: "67257fac3c9f177051768770" // London
    },
    {
        title: "London Landmarks",
        photo: "https://images.unsplash.com/photo-1678739815865-4cc92aaf635a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Emily Clark",
        authorPhoto: "https://www.festival-deauville.com/wp-content/uploads/2023/08/emilia-clarke-robert-ascroft.jpg",
        duration: 3,
        like: 0,
        price: 210,
        hashtags: ["#London", "#UK", "#Travel"],
        city: "67257fac3c9f177051768770" // London
    },
    {
        title: "Theatrical London",
        photo: "https://images.unsplash.com/flagged/photo-1552425595-a5ff53172f75?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "James Bond",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Sean_Connery_as_James_Bond_at_Switzerland_1964_%28two_thirds_crop%29.jpg",
        duration: 2,
        like: 0,
        price: 180,
        hashtags: ["#London", "#Theatre", "#Culture"],
        city: "67257fac3c9f177051768770" // London
    },

    // Rio de Janeiro
    {
        title: "Rio Carnival Experience",
        photo: "https://images.unsplash.com/photo-1584013589024-49ab166a655b?q=80&w=1102&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Carlos Silva",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/a/a8/LS3_1288_%2853332367864%29_%28cropped%29.jpg",
        duration: 5,
        like: 0,
        price: 400,
        hashtags: ["#Rio", "#Carnival", "#Brazil"],
        city: "67257fac3c9f177051768771" // Rio de Janeiro
    },
    {
        title: "Beaches of Rio",
        photo: "https://images.unsplash.com/photo-1710378481461-fa5f358e9a02?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Fernanda Souza",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Fernanda_Souza.jpg",
        duration: 3,
        like: 0,
        price: 250,
        hashtags: ["#Rio", "#Beaches", "#Travel"],
        city: "67257fac3c9f177051768771" // Rio de Janeiro
    },

    // Buenos Aires
    {
        title: "Buenos Aires Essentials",
        photo: "https://images.unsplash.com/photo-1635886630467-a1b8e34a10c1?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Sofia López",
        authorPhoto: "https://m.media-amazon.com/images/S/pv-target-images/fde0bb3f418a74efd9ca94bcf588c21e95ef5d05bc0b09676034545bbde9e684.jpg",
        duration: 3,
        like: 0,
        price: 170,
        hashtags: ["#BuenosAires", "#Argentina", "#Travel"],
        city: "67257fac3c9f17705176876b" // Buenos Aires
    },
    {
        title: "Tango Nights in Buenos Aires",
        photo: "https://b1534bf2.rocketcdn.me/wp-content/uploads/2022/03/La-Ventana-tango-Buenos-Aires.jpg.webp",
        author: "Diego Maradona",
        authorPhoto: "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0705%2Fr876722_1010x568_16%2D9.jpg",
        duration: 4,
        like: 0,
        price: 200,
        hashtags: ["#BuenosAires", "#Tango", "#Culture"],
        city: "67257fac3c9f17705176876b" // Buenos Aires
    },

    // Cape Town
    {
        title: "Cape Town Explorer",
        photo: "https://images.unsplash.com/photo-1535156274718-ae15ec261883?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Thabo Mokoena",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJ6yd19ZcMs_-g38ldpIDNnDi5z_7eaBbBg&s",
        duration: 4,
        like: 0,
        price: 290,
        hashtags: ["#CapeTown", "#SouthAfrica", "#Travel"],
        city: "67257fac3c9f17705176876e" // Cape Town
    },

    // Paris
    {
        title: "Paris Sightseeing",
        photo: "https://images.unsplash.com/photo-1545396471-fd9eacf99232?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Marie Curie",
        authorPhoto: "https://img.freepik.com/fotos-premium/marie-curie-fisica-quimica-radioactividad-juventud-curie-educacion-curie-premio-nobel-curie_980716-17192.jpg",
        duration: 3,
        like: 0,
        price: 240,
        hashtags: ["#Paris", "#France", "#Travel"],
        city: "67257fac3c9f17705176876a" // Paris
    },
    {
        title: "Romantic Paris",
        photo: "https://images.unsplash.com/photo-1689817233804-ad78fdd61486?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Victor Hugo",
        authorPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXRIUQBDvj_77nt6Ma1vUgP2YokQPFRTgUMA&s",
        duration: 2,
        like: 0,
        price: 220,
        hashtags: ["#Paris", "#Romance", "#Culture"],
        city: "67257fac3c9f17705176876a" // Paris
    },

    // Sydney
    {
        title: "Sydney Harbor Cruise",
        photo: "https://images.unsplash.com/photo-1696500204880-004c394dfe9b?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Chris Hemsworth",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chris_Hemsworth_by_Gage_Skidmore_3.jpg/1200px-Chris_Hemsworth_by_Gage_Skidmore_3.jpg",
        duration: 3,
        like: 0,
        price: 260,
        hashtags: ["#Sydney", "#Australia", "#Travel"],
        city: "67257fac3c9f17705176876c" // Sydney
    },
    {
        title: "Sydney Wildlife Experience",
        photo: "https://images.unsplash.com/photo-1726298404286-f82f1670695c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Steve Irwin",
        authorPhoto: "https://assets.bizclikmedia.net/1336/2d2b4cdead71a91caee29ff53e06d690:8af242772a3a712639af7122667de183/steve-20irwin-jpg.webp",
        duration: 4,
        like: 0,
        price: 310,
        hashtags: ["#Sydney", "#Wildlife", "#Adventure"],
        city: "67257fac3c9f17705176876c" // Sydney
    },

    // Mexico City
    {
        title: "Cultural Mexico City",
        photo: "https://lp-cms-production.imgix.net/2023-10/GettyImages-1411248354.jpg?fit=crop&w=3840&auto=format&q=75",
        author: "Carlos Reyes",
        authorPhoto: "https://s3.amazonaws.com/images.salonlofts.com/system/images/7968/large/3331233301IMG_20180830_164112_393.jpg",
        duration: 3,
        like: 0,
        price: 200,
        hashtags: ["#MexicoCity", "#Culture", "#Experience"],
        city: "67257fac3c9f177051768776" // Mexico City
    },
    {
        title: "Gastronomy Tour in Mexico City",
        photo: "https://adventure.com/wp-content/uploads/2023/08/Mexico-City-Eat-like-a-local-IMG_6562-1920x1080.jpg",
        author: "Luisa Gonzalez",
        authorPhoto: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Luisa_Gonz%C3%A1lez_2022.jpg",
        duration: 2,
        like: 0,
        price: 150,
        hashtags: ["#MexicoCity", "#Food", "#Gastronomy"],
        city: "67257fac3c9f177051768776" // Mexico City
    },
    {
        title: "Exploring Historic Center",
        photo: "https://images.unsplash.com/photo-1568402102990-bc541580b59f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        author: "Jorge Silva",
        authorPhoto: "https://heraldodemexico.com.mx/u/fotografias/m/2024/8/21/f768x1-997344_997471_5050.jpg",
        duration: 4,
        like: 0,
        price: 250,
        hashtags: ["#MexicoCity", "#History", "#Exploration"],
        city: "67257fac3c9f177051768776" // Mexico City
    },
    {
        title: "Teotihuacan Day Trip",
        photo: "https://cdn.contexttravel.com/image/upload/c_fill,h_840,q_60/v1682532798/production/product_image/image__1682532798.jpg",
        author: "Patricia Martinez",
        authorPhoto: "https://uaeh.edu.mx/dtwyw/uploads/ful/partners/64dbd676ce634-1692128886/patricia-martinez.jpg",
        duration: 5,
        like: 0,
        price: 300,
        hashtags: ["#MexicoCity", "#Teotihuacan", "#DayTrip"],
        city: "67257fac3c9f177051768776" // Mexico City
    },
    {
        title: "Art Walk in Mexico City",
        photo: "https://culturestraveled.com/wp-content/uploads/2024/08/dual-eagle-corner-mexico-city-street-art-1024x770.jpg",
        author: "Diego Torres",
        authorPhoto: "https://media.diariolasamericas.com/p/3db8965feaae59304b24fdb69632857d/adjuntos/216/imagenes/000/132/0000132397/1200x630/smart/diego-torres-regresa-su-album-buena-vida.jpg",
        duration: 3,
        like: 0,
        price: 180,
        hashtags: ["#MexicoCity", "#Art", "#Culture"],
        city: "67257fac3c9f177051768776" // Mexico City
    }
];

Itinerary.insertMany(itineraries)