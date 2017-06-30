var RepoName = require('./../js/lookup.js').repoNameModule;
var RepoDescription = require('./../js/lookup.js').repoDescriptionModule;

$(document).ready(function() {
  $('#submitName').click(function() {

    var userName = $('#inputName').val();

    $('#inputName').val("");
    var repoNameObject = new RepoName();
    repoNameObject.getUsername(userName);
    var repoDescrObject = new RepoDescription();
    repoDescrObject.getRepos(userName);


    console.log(userName);
  });

});
