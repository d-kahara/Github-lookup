var apiKey = require('./../.env').apiKey;

function RepoName() {

}

RepoName.prototype.getUsername = function(userName) {
  $.get('https://api.github.com/users/' + userName + '?access_token=' + apiKey).then(function(response) {
    $('#avatar').html('<img class="thumbnail" src="' + response.avatar_url + '">');
    if(response.name === null){
      response.name = "No name set";
    }
    console.log(response.description);
    $('#output').text(response.name);

  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
    $('#inputForm').empty();
    $('#avatar').empty();
  });
};
exports.repoNameModule = RepoName;

function RepoDescription() {

}
RepoDescription.prototype.getRepos = function(userName) {
  $.get('https://api.github.com/users/:' + userName + '/repos').then(function(repos) {

        $('#repos').text(repos.all);

      });
    console.log(repos);
};
exports.repoDescriptionModule = RepoDescription;
