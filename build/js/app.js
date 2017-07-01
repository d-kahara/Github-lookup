(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//var apiKey = require('./../.env').apiKey;

function RepoAcc() {

}

RepoAcc.prototype.getUserAcc = function(userName) {
  $.ajax({
    url: ('https://api.github.com/users/' + userName + '?access_token=e7f7c50800fd4bd7620f8eaa9719708bcc8b1346')
  }).done(function(response) {
    $.ajax({
      url: 'https://api.github.com/users/' + userName + '/repos',
      sort: 'created:asc',
      per_page: 5
    }).done(function(repos) {
      $.each(repos, function(index, repo) {
        if(repo.description===null){
          repo.description="No description for this repository"
        };
        $('#repos').append(` <div class='well'>
                        <div class='row'>
                            <div class='col-md-7'>
                                <strong>${repo.name}</strong>: ${repo.description}
                            </div>
                            <div class='col-md-3'>
                                <span class="label label-default">Forks: ${repo.forks_count}</span>
                                <span class="label label-primary">Watchers: ${repo.watchers_count}</span>
                                <span class="label label-success">Stars: ${repo.stargazers_count}</span>
                                <span class="label label-warning">Date Created: ${moment(repo.created_at).format('MMMM Do YYYY, h:mm:ss a')}</span>
                            </div>
                            <div class='col-md-2'>
                            <a href='${repo.html_url}' target='_blank' class='btn btn-info'>Repo Page</a>
                            </div>
                        </div>
                    </div>`);

        console.log(repo);
      });

    });
    $('#avatar').html('<img class="thumbnail" src="' + response.avatar_url + '">');
    if (response.name === null) {
      response.name = "No name set";
    }

    $('#output').append(`<div class="page-header" id="userName"><span class="label label-primary">${response.name}<span></div> `);

  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
    $('#inputForm').empty();
    $('#avatar').empty();
  });
};

exports.repoAccModule = RepoAcc;

},{}],2:[function(require,module,exports){
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

},{"./../js/lookup.js":1}]},{},[2]);
