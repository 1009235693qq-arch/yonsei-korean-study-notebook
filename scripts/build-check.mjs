import { existsSync } from 'node:fs';
const files = ['index.html', 'src/app.js', 'src/data.js', 'src/styles.css'];
const missing = files.filter((file) => !existsSync(file));
if (missing.length) throw new Error(`缺少文件：${missing.join(', ')}`);
console.log('静态站点结构检查通过。使用 npm run dev 启动本地服务器。');
