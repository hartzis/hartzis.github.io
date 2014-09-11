(function(){
  'use strict';
  $(document).on('ready', function(){

    var getGitHubSocialInfo = function(githubURLJSON, githubURL, containerEl) {
      $.ajax({
                url:        githubURLJSON,
                dataType:   "jsonp",
                success:    function(data) {
                  var theCount = data.data.watchers_count;
                  var gitHubListEl = $('<li class="ng-social-github">'+
                  '<a href="'+githubURL+'" target="_blank" class="ng-social-button">'+
                  '<span class="ng-social-icon"></span>'+
                  '<span class="ng-social-text">GitHub</span>'+
                  '</a>'+
                  '<span class="ng-social-counter">'+theCount+'</span>'+
                  '</li>');
                  $(containerEl).append(gitHubListEl);
                }
      });
    }

    var gitHubRepos = [{
        githubURLJSON: 'https://api.github.com/repos/esvit/ng-table?callback=JSON_CALLBACK',
        githubURL: 'https://github.com/esvit/ng-table',
        containerEl: $('#ngtable-github')
      },
      {
        githubURLJSON: 'https://api.github.com/repos/angular-ui/ng-grid?callback=JSON_CALLBACK',
        githubURL: 'https://github.com/angular-ui/ng-grid',
        containerEl: $('#nggrid-github')
      },
      {
        githubURLJSON: 'https://api.github.com/repos/MoonStorm/trNgGrid?callback=JSON_CALLBACK',
        githubURL: 'https://github.com/MoonStorm/trNgGrid',
        containerEl: $('#trnggrid-github')
      }]

    if ($('#ngtable-github').length != 0) {
      gitHubRepos.map(function(repo) {
        getGitHubSocialInfo(repo.githubURLJSON, repo.githubURL, repo.containerEl);
      })  
    }

  })
})();