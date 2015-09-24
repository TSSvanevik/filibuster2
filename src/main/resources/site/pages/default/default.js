var thymeleaf = require('/lib/xp/thymeleaf');
var portal = require('/lib/xp/portal');

exports.get = function(req) {

	var view = resolve('default.html');

	var content = portal.getContent();
	var mainRegion = content.page.regions["main"];

	if (!mainRegion.components) {
		mainRegion.components = {};
	}

	var model = {
		mainRegion: mainRegion
	};

	var body = thymeleaf.render(view, model);

	return {
		body: body,
		contentType: 'text/html'
	};
};
