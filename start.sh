curl -o NodeDemo.zip https://codeload.github.com/magicnana999/NodeDemo/zip/master
unzip NodeDemo.zip
cd NodeDemo-master
npm install
pm2 start bin/www
curl -XGET http://127.0.0.1:3000/hello