/**
 * Test of Tas.js
 * (c) 2017 Owen Luke
 * https://github.com/tasjs/tas
 * Released under the MIT License.
 */

define(['../tas', '../../lib/superagent'],
function(tas, superagent) {

	var request = superagent;
	var data;

	tas.promise(function () {
		request.get('https://raw.githubusercontent.com/tasjs/tas/master/examples/__res/pics/a.json').end(this.done);
	});

	tas(function (err, d) {
		data = d;
	});

	return {
		get: function () {
			return data;
		}
	};
});
