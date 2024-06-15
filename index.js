const movies = [
    {
        title: "The Giant Gila Monster",
        runtime: "108 minutes",
        showtime: "04:00PM",
        description: "A giant lizard terrorizes a rural Texas community and a heroic teenager attempts to destroy the creature.",
        poster: "https://www.gstatic.com/tv/thumb/v22vodart/2157/p2157_v_v8_ab.jpg"
    },
    {
        title: "Manos: The Hands Of Fate",
        runtime: "118 minutes",
        showtime: "06:45PM",
        description: "A family gets lost on the road and stumbles upon a hidden, underground, devil-worshiping cult led by the fearsome Master and his servant Torgo.",
        poster: "https://www.gstatic.com/tv/thumb/v22vodart/47781/p47781_v_v8_ac.jpg"
    },
    {
        title: "Time Chasers",
        runtime: "93 minutes",
        showtime: "09:30PM",
        description: "An inventor comes up with a time machine, but must prevent its abuse at the hands of an evil C.E.O.",
        poster: "https://www.gstatic.com/tv/thumb/v22vodart/23342/p23342_v_v8_ab.jpg"
    }
];

let draggedMovie;

function displayMovieDetails(movie){
    const titleElement = document.getElementById('title');
    titleElement.textContent = movie.title;
    const runtimeElement = document.getElementById('runtime');
    runtimeElement.textContent = movie.runtime;
    const descriptionElement = document.getElementById('description');
    descriptionElement.textContent = movie.description;
    const showtimeElement = document.getElementById('showtime');
    showtimeElement.textContent = movie.showtime;
    const posterElement = document.getElementById('poster');
    posterElement.src = movie.poster;
    posterElement.alt = movie.title;
}

const filmsListElement = document.getElementById('films');
filmsListElement.textContent = "";

displayMovieDetails(movies[0]);

movies.forEach(addMovieToList);

function addMovieToList(movie){
    const liElement = document.createElement('li');
    liElement.className = "film item";
    liElement.textContent = movie.title;
    
    const filmsListElement = document.getElementById('films');
    filmsListElement.appendChild(liElement);

    // Write your solution code for Task # 4 here!
}

function handleSubmit(event){
    // Write your solution code for Task # 2 here!
}

function handleLoad(event){
    // Write your solution code for Task # 3 here!
}

// Write your solution code for Task # 1 here!

// Write your solution code for Task # 5 here!

// Write your solution code for Task # 6 here!