const fs = require('fs');
const jsonServer = require('json-server');
const path = require('path');
const server = jsonServer.create();
const router = jsonServer.router(path.resolve(__dirname, 'db.json'));
server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);
// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 300);
  });
  next();
});
// Эндпоинт для логина
server.post('/login', (req, res) => {
  try {
    const { email, password } = req.body;
    const db = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'db.json'), 'UTF-8'));
    const { users = [] } = db;
    // находим в бд пользователя с таким username и password
    const userFromBd = users.find(
    (user) => user.email === email && user.password === password,
    );
    if (userFromBd) {
    return res.json(userFromBd);
    }
    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});
// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
 // разрешаем публичный доступ без авторизации
  if (req.path === '/public/path') {
    return next();
  }

  // для всех остальных маршрутов запрещаем
  // if (!req.headers.authorization) {
  //   return res.status(403).json({ message: 'AUTH ERROR' });
  // }
  next();
});
server.use(router);
// запуск сервера
server.listen(8000, () => {
  console.log('server is running on 8000 port');
});