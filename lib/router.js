

Router.route('/',   {
						name: 'intro',
						waitOn:  function()
								{
									return Meteor.subscribe('clientChoice');

								}
});


Router.route('/myForm',   {
						name: 'myForm',
						waitOn:  function()
								{
									return Meteor.subscribe('clientChoice');

								}
});


Router.route('/userInfo',   {
						name: 'userInfo',
						waitOn:  function()
								{
									return Meteor.subscribe('clientChoice');

								}
});