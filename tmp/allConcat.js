var RepoAcc = require('./../js/lookup.js').repoAccModule;

$(document).ready(function() {
  $('#submitName').click(function() {

    var userName = $('#inputName').val();

    $('#inputName').val("");
    var repoAccObject = new RepoAcc();
    repoAccObject.getUserAcc(userName);
    



    console.log(userName);
  });

});
