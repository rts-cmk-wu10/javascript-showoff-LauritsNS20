// skriv din JavaScript her...
// jeg vil prøve at lave En musik database med søgefunktion

var myMusic = [
    {
        title: "Stairway to Heaven",
        published:1971,
        genre: [" Hård rock", "Progressiv rock"],
        artist: ["Led Zeppelin"],
    },
    {
        title: "Purple Haze",
        published:1967,
        genre: [" Klassisk rock"],
        artist: ["Jimi Hendrix"],
    },
    {
        title: "Bohemian Rhapsody",
        published:1975,
        genre: ["Hård rock", " Indie/alternativt", "Pop"],
        artist: ["Queen"],
    },
    {
        title: "Free Bird",
        published:1973,
        genre: [" Southern rock", "Hård rock"],
        artist: ["Lynyrd Skynyrd"],
    },
    {
        title: "Fortunate Son",
        published:1969,
        genre: ["Rock"],
        artist: ["Creedence Clearwater Revival"],
    },
]

const FORM = document.querySelector(".searchForm")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event) {
    event.preventDefault()

    const RESULTS = myMusic.filter(function(element){
        return searchTitle(event.target.search.value, element.title)
        || compare(element.published, event.target.search.value)
        || findInArray(element.genre, event.target.search.value)
        || findInArray(element.artist, event.target.search.value)
    })

    console.log(RESULTS)
    const UL = document.getElementsByClassName("musicResults")[0]

    RESULTS.forEach(function(result){
        const LI = document.createElement("li")
        LI.innerHTML = `
        <h2 class="music__Title">${result.title}</h2>
        <span>${result.published}</span>
        <h3>genre</h3>
        <ul class="musicGenres"></ul>
        <h3>kunstner</h3>
        <ul class="musicArtist"></ul>
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

const BANDS = [
    {
        name: "Led Zeppelin",
        age: 1970,
        genre: ["Hård rock"],
    },
    {
        name: "Jimi Hendrix",
        age: 1970,
        genre: ["Klassisk rock"],
    },
    {
        name: "Queen",
        age: 1970,
        genre: ["Hård rock", "Indie/alternativt", "Pop" ],
    },
    {
        name: "Lynyrd Skynyrd",
        age: 1964,
        genre: ["Southern rock", "Hård rock"],
    },
    {
        name: "Creedence Clearwater Revival",
        age: 1959,
        genre: ["Rock"],
    },
]
 
BANDS.forEach(function(result){
    document.body.innerHTML += `
    <h2>${result.name} is a ${result.age} 
    band with the genre  ${result.genre}</h2>`
})