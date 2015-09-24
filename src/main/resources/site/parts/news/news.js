var thymeleaf = require('/lib/xp/thymeleaf'); // Import the thymeleaf render function
var portal = require('/lib/xp/portal'); // Import the portal functions

exports.get = function(request) {
    var component = portal.getComponent();

    var heading = component.config.heading;
    var date = component.config.date;
    var content = component.config.content;

    var heading = heading || 'Dummy text';

    var model = {
      component: component,
      heading: heading,
      date: date,
      content: content
    };

    var view = resolve('./news.html');

    var body = thymeleaf.render(view, model);

    return {
        body: body,
        contentType: 'text/html'
    };
};
