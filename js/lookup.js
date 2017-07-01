var apiKey = require('./../.env').apiKey

function RepoAcc() {

}

RepoAcc.prototype.getUserAcc = function(userName) {
  $.ajax({
    url: ('https://api.github.com/users/' + userName + '?access_token=' + apiKey)
  }).done(function(response) {
    $.ajax({
      url: 'https://api.github.com/users/' + userName + '/repos',
      sort: 'created:asc',
      per_page: 5
    }).done(function(repos) {
      $.each(repos, function(index, repo) {
        if(repo.description===null){
          repo.description="No description for this repository";
        }
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
    $('#avatar').html('<img class="thumbnail avatar" src="' + response.avatar_url + '">');
    if (response.name === null) {response.name = "No name set";}
    if(response.location===null){response.location="No Location Information provided";}
    if(response.email===null){response.email="Email not provided";}
    if(response.bio===null){response.bio="Bio not provided";}

    $('#output').html(`<div class="page-header" id="userName"><span class="label label-default">${response.name}<span>
    </div>
    <span class="label label-success">Followers:${response.followers}</span>
    <span class="label label-success">Following:${response.following}</span><br>
    <h4>User Data:</h4>


    <span class="label label-warning">User Bio:</span><div class="well well-sm"> ${response.bio}</div>


    <span class="label label-warning">Location:</span><div class="well well-sm"> ${response.location}</div>


    <span class="label label-warning">Email:</span><div class="well well-sm"> ${response.email}</div>


    <a href="${response.html_url}"><button class="btn btn-info">View Github Profile</button></a>

     `);

  }).fail(function(error) {
    $('#output').text(error.responseJSON.message);
    $('#repos').empty();
    $('#avatar').empty();
  });
};

exports.repoAccModule = RepoAcc;
