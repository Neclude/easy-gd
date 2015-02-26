test:
	node_modules/.bin/mocha --reporter spec --colors 2>/dev/null
benchmark:
	node benchmark/resize.js
coverage:
	node_modules/istanbul/lib/cli.js cover node_modules/mocha/bin/_mocha -- --ui bdd -R spec -t 5000
.PHONY: test benchmark coverage
