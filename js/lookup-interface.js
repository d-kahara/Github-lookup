var RepoName = require('./../js/lookup.js').repoNameModule;

$(document).ready(function() {
  $('#submitName').click(function() {

    var userName = $('#inputName').val();

    $('#inputName').val("");
    var repoObject = new RepoName();
    repoObject.getUsername(userName);
    console.log(userName);
  });

});
