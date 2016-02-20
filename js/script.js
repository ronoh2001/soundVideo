function tplawesome(e,t){res=e;for(var n=0;n<t.length;n++){res=res.replace(/\{\{(.*?)\}\}/g,function(e,r){return t[n][r]})}return res}

$(function () {
  $('form').on('submit', function(e){
    e.preventDefault();
		// console.log(gapi.client.youtube);
    var request= gapi.client.youtube.search.list({
      part: 'snippet',
      type: 'video',
			safeSearch: $('input[name=PC]:checked', '#ParentControl').val(),
      q: encodeURIComponent($('#search').val()).replace(/%20/g, "+"),
      maxResults:3,
      order: 'viewCount',
      publishedAfter: '2015-01-01T00:00:00z'
    });
    request.execute(function(response) {
			var results = response.result;

      $('#results').html("");
      $.each(results.items, function(index, item) {
        $.get('tpl/item.html', function(data) {
          $('#results').append(tplawesome(data, [{'title':item.snippet.title, 'videoid':item.id.videoId}]));
        });
      });
      resetVideoHeight();
    });
  });
  $(window).on('resize', resetVideoHeight);
});
function resetVideoHeight() {
  $('.video').css('height', $('#results').width() * 9/16);
}

	$('#ParentControl input').on('change', function() {
		console.log($('input[name=PC]:checked', '#ParentControl').val());
	})


	//
	//  var Control = $('input[name="PC"]:checked').val();
	// })


function init() {

	gapi.client.setApiKey('AIzaSyCbJVfFebb4hCviEsSaIlENrTopSFZqtaQ');
	gapi.client.load('youtube', 'v3', function() {
 });
}
