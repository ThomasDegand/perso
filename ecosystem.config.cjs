module.exports = {
	/**
	 * Application configuration section
	 * http://pm2.keymetrics.io/docs/usage/application-declaration/
	 */
	apps: [
		// First application
		{
			name: 'cv.aerles.fr', // name of the process in PM2
			script: 'build/index.js',
			env_production: {
				NODE_ENV: 'production',
				PORT: 9092 // port the app will be launched on
			}
		}
	],

	/**
	 * Deployment section
	 * http://pm2.keymetrics.io/docs/usage/deployment/
	 */
	deploy: {
		production: {
			user: 'clostrophe', // deployer user
			host: '192.168.0.33', // IP address of your server
			ref: 'origin/master', // the branch you want to deploy
			repo: 'git@https://github.com/ThomasDegand/perso.git', // the ssh git clone URL
			path: '.', // the path where you want the project to be
			// code you want to run after the project has been pushed to your server
			'post-deploy':
				'npm install && npm run build && pm2 reload ecosystem.config.js --env production'
		}
	}
};
