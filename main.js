window.onload = function() { titleSeq() };

function titleSeq() {
    const subtitle = document.getElementById("subtitle");
    const subtitles = [
        "doin' ya mom",
        "gameing",
        "dies from cringe",
        "brains r overrated",
        "does anybody even read this?",
        "i hate the british",
        "my face when it langoš",
        "what the dog doin'?",
        "professional sussy baka",
        "ah! so sorry!",
        "eats hot chip & lies",
        "eat, sleep, ponder my orb",
        ":star2:",
        "coconut dogy! o mai gosh!!",
        "SOCKS ON THE CHAIR??!?!",
        "https://youtu.be/dQw4w9WgXcQ",
        "i'm going to be switzerland", // The Prequel
        "why am i argentina",          // The Sequel
        "e",
        "ඞ",
        "just a week away!",
        "femboy hooters employee",
        "WTF!!! SEX??!?",
        "average cumfartcore enjoyer",
        "be gay do crimes",
        "susi baki",
        "hi welcome to chilly's",
        "mentally ill since 2005",
        "xia",
        "yoo apro with no xia",
        "i live in your walls",
        "8 bobux :heart_eyes:",
        "aka. a buncha bones n' stuff",
        "you are a beta male sonic",
        "chimkin nuggie enjoyer",
        "be bi mk ppl cri",
        "who asked: human edition",
    ];
    subtitleInt = Math.floor(Math.random() * subtitles.length);
    subtitle.innerHTML = subtitles[subtitleInt];
}