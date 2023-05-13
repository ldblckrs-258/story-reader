var storedText;
fetch(url)
    .then(function(response) {
    response.text().then(function(text) {
        storedText = text;
        var words = text.split(" ");
        done();
    });
});

function done() {
    document.getElementById('mainText').innerHTML = storedText;
    document.getElementById('Story').innerHTML = storyName;
    document.getElementById('Chapts').innerHTML = chapterName;
    document.getElementById('Chapt').innerHTML = ": " + chapterName;
    document.getElementById('ChaptN').innerHTML = chapterNumb;
    document.getElementById('Author').innerHTML = authorName;
    document.getElementById('Words').innerHTML = storedText.length;
    document.getElementById('Reacts').innerHTML = reactS;
    document.getElementById('Time').innerHTML = time;
}

