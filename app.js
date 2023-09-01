// skriv din JavaScript her...
// jeg vil prøve at lave En musik database med søgefunktion

var myMusic = [
    {
        title: "Stairway to Heaven",
        published:1971,
        genres: [" Hård rock", "Progressiv rock"],
        artist: ["Led Zeppelin"],
    },
    {
        title: "Purple Haze",
        published:1967,
        genres: [" Klassisk rock"],
        artist: ["Jimi Hendrix"],
    },
    {
        title: "Bohemian Rhapsody",
        published:1975,
        genres: ["Hård rock", " Indie/alternativt", "Pop"],
        artist: ["Queen"],
    },
    {
        title: "Free Bird",
        published:1973,
        genres: [" Southern rock", "Hård rock"],
        artist: ["Lynyrd Skynyrd"],
    },
    {
        title: "Fortunate Son",
        published:1969,
        genres: ["Rock"],
        artist: ["Creedence Clearwater Revival"],
    },
    {
        title: "Purple Rain",
        published:1984,
        genres: ["pop"],
        artist: ["Prince"],
    },
    {
        title: "rorkes drift",
        published:2016,
        genres: ["power metal"],
        artist: ["Sabaton"],
    },
    {
        title: "paint it black",
        published:2012,
        genres: ["Rock"],
        artist: ["The Rolling Stones"],
    },
    {
        title: "Sweet Home Alabama",
        published:1974,
        genres: ["Country rock"],
        artist: ["Lynyrd Skynyrd"],
    },
    {
        title: "Take On Me",
        published:1985,
        genres: [" Synthpop", "New wave"],
        artist: [" a-ha"],
    },
    {
        title: "Paper Planes",
        published:2007,
        genres: ["Indie/alternativt"],
        artist: ["M.I.A."],
    },
    {
        title: "I Want It That Way",
        published:1999,
        genres: ["Pop"],
        artist: ["Backstreet Boys"],
    },
    {
        title: "Happy",
        published:2014,
        genres: ["Soul", "Pop"],
        artist: ["Pharrell Williams"],
    },
    {
        title: "everybody",
        published:1997,
        genres: ["Pop"],
        artist: ["Backstreet Boys"],
    },
    {
        title: "Till I Collapse",
        published:2002,
        genres: [" Hiphop/rap"],
        artist: ["Eminem"],
    },
    {
        title: "California Love",
        published:1995,
        genres: ["hip hop gangsta rap "],
        artist: ["Tupac Shakur", " Dr. Dre"],
    },
    {
        title: "Straight Outta Compton",
        published:1988,
        genres: ["West Coast hip hop gangsta rap hardcore hip hop"],
        artist: ["N.W.A."],
    },
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    const RESULTS = myMusic.filter(function(element){
        return searchTitle(event.target.search.value, element.title)
        || compare(element.published, event.target.search.value)
        || findInArray(element.genres, event.target.search.value)
        || findInArray(element.artist, event.target.search.value)
    })

    console.log(RESULTS)
    const UL = document.getElementsByClassName("musicResults")[0]

    RESULTS.forEach(function(result) {
        const LI = document.createElement("li")
        LI.innerHTML = `
        <h2 class="music__Title">${result.title}</h2>
        <span>${result.published}</span>
        <h3>genre</h3>
        <ul class="musicGenres"></ul>
        <h3>kunstner</h3>
        <ul class="musicArtists"></ul>
        `
        const GENRES = LI.querySelector(".musicGenres")
        const ARTISTS = LI.querySelector(".musicArtists")

        result.genres.forEach(genre => GENRES.innerHTML = `<li>${genre}</li>`)
        result.artist.forEach(artist => ARTISTS.innerHTML = `<li>${artist}</li>`)

        UL.append(LI)
    })
}

function searchTitle(keyword, title) {
    return title
      .toLowerCase()
      .includes(
      keyword.toLowerCase()
       )
  } 
  const compare = (a, b) => a == b

  function findInArray(haystack, neddle) {
    return haystack.find(function(item) {
        return item.toLowerCase().includes(neddle.toLowerCase())
    })
}