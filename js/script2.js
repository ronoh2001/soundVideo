function playSound(genre) {
  console.log(genre);
  SC.get('/tracks', {
    genres: genre,
    limit:30
}, function(tracks) {
  var random = Math.floor(Math.random() *29);
  SC.oEmbed(tracks[random].uri, { auto_play: true}, document.getElementById('target'));
});
}

window.onload = function() {
  SC.initialize({
    client_id: '3f3ca693d9b7196b9728548ba5b423f0',
    client_secret: '87f97416a9adbd9b2d1de3220fb73afe'
  });

  var menuLinks = document.getElementsByClassName('genre');
  for (var i=0; i<menuLinks.length; i++) {
    (function(i) {
      menuLinks[i].onclick = function(e) {
        e.preventDefault();
        playSound(menuLinks[i].innerHTML);
      }
    })(i);
  }
};
// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'aoa' }, function(tracks) {
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });
//   });
// });
