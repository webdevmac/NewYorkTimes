var api_url = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + api_key;
var q = "";
var begin_date = "";
var end_date = "";
var api_key = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

url += '?' + $.param({
  q: "",
  begin_date: "",
  end_date: "",
});

  $.ajax({
    "url"   : api_url,
    "method": "GET"

  }).done(function(data) {
    console.log(data);


  });