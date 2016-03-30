

Router.route('/',   {
						name: 'intro',
						waitOn:  function()
								{
									Meteor.subscribe('settings');
									return Meteor.subscribe('clientChoice');

								}
});


Router.route('/clientInput',   {
						name: 'clientInput',
						waitOn:  function()
								{
									Meteor.subscribe('settings');
									return Meteor.subscribe('clientChoice');

								}
});


Router.route('/userInfo',   {
						name: 'userInfo',
						waitOn:  function()
								{
									Meteor.subscribe('Metadata');
									return Meteor.subscribe('clientChoice');

								}
});