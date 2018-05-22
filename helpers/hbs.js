const moment = require('moment');

module.exports = {
  truncate: function(str, len){
    if (str.length > len && str.length > 0) {
			var new_str = str + " ";
			new_str = str.substr(0, len);
			new_str = str.substr(0, new_str.lastIndexOf(" "));
			new_str = (new_str.length > 0) ? new_str : str.substr(0, len);
			return new_str + '...';
		}
		return str;
  },
  stripTags: function(input){
    return input.replace(/<(?:.|\n)*?>/gm, '');
  },
  formatDate: function(date, format){
    return moment(date).format(format);
  },
  countdown: function(enddate,loggedUser){
    if(loggedUser){
      return "Deadline ends " + moment(enddate).fromNow();
    }
    
  },
  select: function(selected, options){
    return options.fn(this).replace( new RegExp(' value=\"' + selected + '\"'), '$& selected="selected"').replace( new RegExp('>' + selected + '</option>'), ' selected="selected"$&');
  },
  editIcon: function(storyUser, loggedUser, storyId, floating = true){
    if(storyUser == loggedUser){
      if(floating){
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red"><i class="fa fa-pencil"></i></a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fa fa-pencil"></i></a>`;
      }
    } else {
      return '';
    }
  },
  joinIcon: function(storyUser, loggedUser, storyId, floating = true){
    if(storyUser !== loggedUser && loggedUser){
      if(floating){
        return `<a href="/stories/edit/${storyId}" class="btn-floating halfway-fab red"><i class="fa fa-hand-o-right" aria-hidden="true"></i>Contribute
        </a>`;
      } else {
        return `<a href="/stories/edit/${storyId}"><i class="fa fa-hand-o-right"></i>Contribute</a>`;
      }
    } else {
      return '';
    }
  },

  calenderLink: function(title, body, date, enddate){
    let ed = enddate.toISOString().split('T')[0].replace(/-/g,"");
    let d    = date.toISOString().split('T')[0].replace(/-/g,"");
    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${d}/${ed}&details=${body}`
  },
  formatdateForidea: function(enddate){
    return enddate.toISOString().split('T')[0];

  }
  
}