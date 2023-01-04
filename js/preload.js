
const { readFileSync } = require('fs');
const { writeFileSync } = require('fs');

const path = require('path').join(__dirname, 'script_data.xml');

window.readConfig = function () {
	 // 组合路径
	const data = readFileSync(path, 'utf-8');
	return data;
}

window.writeConfig = function (data) {
	writeFileSync(path, data);
}

utools.onPluginEnter(({code, type, payload}) => {
  	console.log('用户进入插件', code, type, payload);
})

