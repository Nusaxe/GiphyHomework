var searches = [];

$(".btns").on("click", function () {
    var synth = $(this).attr("data-synth");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        synth + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $(".container2").prepend(gifDiv);
            }
        });
});

$("#searchBtn").on("click", function () {
    var search = $("#newSynth").val();
    var synth = $(this).attr("#newSynth");

    console.log(search);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        synth + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=5";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("<div>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $(".container2").prepend(gifDiv);
            }
        });

    var buttonDiv = $("#btn-div");
    var newButton = '<button data-synth="OB-8" type="button" class="btn btn-secondary btn-sm btns">' + search + '</button>';
    console.log(newButton);
    buttonDiv.prepend(newButton);
});