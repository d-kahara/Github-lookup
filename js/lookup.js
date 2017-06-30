//var apiKey = require('./../.env').apiKey;

function RepoName() {

}

RepoName.prototype.getUsername = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=c8d198c9ac916065fe3ff195883d44a4434e7f5f').then(function(response) {
    $('#avatar').html('<img src="' + response.avatar_url + '">');
    if(response.name === null){
      response.name = "No name set";
    }
    $('#output').text(response.name);

  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
    $('#inputForm').empty();
    $('#avatar').empty();
  });
};
exports.repoNameModule = RepoName;
