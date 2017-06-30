(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
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

},{"./../js/lookup.js":1}]},{},[2]);
