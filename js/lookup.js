var apiKey = require(./../.env).apiKey;

function RepoName(userInput) {
  this.userInput = userInput;
}

RepoName.prototype.getUsername = function(username) {
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response) {
    $('#avatar').html('<img src="' + response.avatar_url + '">');
    if(response.name === null){
      response.name = "No name set";
    }
    $('#output').text(response.name);
    //event.preventDefault();
  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
    $('#inputForm').empty();
    $('#avatar').empty();
  });
};
exports.repoNameModule = RepoName;
