# angular-seed — the seed for AngularJS apps

Just playing with angularjs nodejs using cloud9 (c9.io) and github

steps to start on c9.io

1. create github project
2. clone in c9.io
3. install angular-seed

rm -rf * .c9
git clone --depth=1 https://github.com/angular/angular-seed.git .
npm install
mv package.json package.json.bak
jq '.scripts.start="http-server -a $IP -p $PORT"' package.json.bak > package.json

npm start

git add . 

git commit -m "First commit"

git push -u origin master

Another issue faced .c9 folder included in github to ignore

Add .gitignore file and add ".c9/" to ignore c9 folder. 



