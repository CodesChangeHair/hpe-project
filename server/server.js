const express = require('express');
const multer = require('multer');
const cors = require('cors');  // 引入 CORS 中间件
const path = require('path');

const app = express();

// 使用 CORS 中间件，允许所有来源的请求
app.use(cors());

// 设置文件存储路径和文件名
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// 处理上传请求
app.post('/upload', upload.single('video'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('没有选择文件');
  }

  res.send('文件上传成功');
});

// 创建 uploads 目录
const fs = require('fs');
const uploadDir = './uploads';
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// 监听端口
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`服务器已启动，监听端口 ${port}`);
});
