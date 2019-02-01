var songs = [
    "7 rings ",
    "Lost In Japan",
    "Mia",
    "Imagine"
];

var artists = [
    "Ariana Grande",
    "Shawn Mendes",
    "Bad Bunny ft. Drake",
    "Ariana Grande"
];

var images = [
    "https://vignette.wikia.nocookie.net/arianagrande/images/e/ef/7_Rings_Cover.jpg/revision/latest?cb=20190115042210",
    "https://cms.algoafm.co.za/img/or_201871995438.png?w=800",
    "https://ssl.ulximg.com/image/750x750/cover/1545628680_8532bdb4f8f4561a0c839174738c4a0f.jpg/8f7dbd23444fa35e5722ed60dff31594/1545628680_07da6776b3d2ff798767ff66c8615d70.jpg",
    "https://peopledotcom.files.wordpress.com/2018/12/imagine-cover-1200.jpg"

];

var links = [
    "https://www.youtube.com/watch?v=6YNZlXfW6Ho",
    "https://www.youtube.com/watch?v=KRaPykuwCiw",
    "https://www.youtube.com/watch?v=leu-cTvMWTA",
    "https://www.youtube.com/watch?v=d_rRf2Jhn8k"
];

var lengths = [
    241,
    201,
    289,
    333
];

function displaySongInfo(){
    images.forEach(function(image) {
    $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#images").empty();
    $("#songs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}

$("#add").click(function() {
    var songName = $("#song").val();
    var imageUrl = $("#image").val();
    var artistName = $("#artist").val();
    var songLength = $("#length").val();
    var link = $("#links").val();

    songs.push(songName);
    artists.push(artistName);
    images.push(imageUrl);
    lengths.push(songLength);
    links.push(link);

    emptySongInfo()
    displaySongInfo();
});

displaySongInfo();
