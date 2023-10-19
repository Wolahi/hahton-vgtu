#envs = \
#REACT_APP_AUTH_URL='http://158.160.14.210:32100' \
#REACT_APP_API_URL='http://158.160.14.210:32100' \
#REACT_APP_GRAPHQL_URL='http://158.160.14.210:32100/graphql'



install: install-deps

start:
	$(envs) CI=false DISABLE_ESLINT_PLUGIN=true npm run start

install-deps:
	npm i --legacy-peer-deps

serveBuild:
	serve -s build -l $(servePort)

build:
	DISABLE_ESLINT_PLUGIN=true npm run build

test:
	npm test -s

test-coverage:
	npm test -- --coverage

lint:
	npx eslint . --ext ts,tsx

graph:
	npm run generate