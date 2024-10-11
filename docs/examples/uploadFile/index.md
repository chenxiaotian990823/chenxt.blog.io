---
title: 文件上传
sidebarDepth: 0
date: 2024-07-09
---

# 文件上传

[[toc]]

## 调试接口

上传文件的本质就是一个http请求

可以使用postman、apifox、vscode rest client插件 测试接口

讲一下怎么使用vscode rest client

在工程中新建一个文件，名字随意，比如upload.http
```http
GET /upload/single HTTP/1.1
Host: test.com:9527
```
post请求如下：
```http
POST /upload/single HTTP/1.1
Host: test.com:9527
Content-Type: multipart/form-data; boundary=aaa

--aaa
Content-Disposition: form-data; name="avator";
filename="test.png";
Content-Type: image/png

图片的二进制数据
这个插件可以这么写
< ./test.png
--aaa--
```

其中boundary是分隔符，用于分隔字段

## 上传文件界面

```html
<!-- 一个文件上传 -->
<input type="file" @change="uploadFile" />
<!-- 一个进度条，暂时举例element，可以自己写，然后控制进度条的进度 -->
<el-progress :percentage="percentage" />
<!-- 一个取消 -->
<el-button @click="cancelUpload">取消</el-button>
<!-- 预览图 -->
<img :src="imgUrl" alt="" />
```

## 单个文件上传

```js
let cancleUpload = null;
// 获取dom元素
const input = document.querySelector('input[type="file"]');
// 监听input点击
input.addEventListener('click', () => {})
// 监听input的change事件
input.addEventListener('change', (e) => {
  // 显示progress并预览
})
// 获取文件
const file = e.target.files[0];
// 当文件格式和大小都符合要求，开始上传
if (checkFileType(file) && checkFileSize(file)) {}
// 上传文件
cancleUpload = uploadFile(file, function(val) {
  // 进度变化
  setProgress(val);
}, function(resp) {
  // 上传完成,然后关闭预览和进度，展示图片
  this.imgUrl = resp.data.url;
});
// 取消上传
cancelUpload() {}
// 在上传图片过程中既要预览图片，也要显示进度
function previewImage(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    this.imgUrl = e.target.result;
  }
}
// 上传文件
function uploadFile(file, onProgress, onFinish) {
  let p = 0
  onProgress(p)
  const timerId = setInterval(() => {
    p++
    onProgress(p)
    if(p == 100) {
      onFinish("上传完成")
      clearInterval(timerId)
    }
  }, 50) // 模拟进度
  return function () {
    // 取消
    clearInterval(timerId)
  }
}

// 验证文件格式
function checkFileType(file) {}
// 验证文件大小
function checkFileSize(file) {}
// 改变进度的方法
function setProgress(value) {
  this.percentage = value;
}
// 取消上传
function cancelUpload() {
  cancleUpload && cancleUpload() // 取消网络传输，然后改变界面
}
```

真实的uploadFile方法

```js
function uploadFile(file, onProgress, onFinish) {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const resp = JSON.parse(xhr.responseText);
    onFinish(resp);
  },
  xhr.open("POST", "/upload/single", true);
  const formData = new FormData();
  form.append("avator", file, file.name);
  xhr.send(formData)
  xhr.upload.onprogress = function (e) {
    onProgress(Math.floor(e.loaded / e.total * 100))
  }
  return function () {
    xhr.abort();
  }
}
```

axios使用如下

```js
import axios from 'axios';

function uploadFile(file, onProgress, onFinish) {
  const formData = new FormData();
  formData.append("avatar", file, file.name);

  const source = axios.CancelToken.source();

  const config = {
    onUploadProgress: function (progressEvent) {
      const percentCompleted = Math.floor((progressEvent.loaded * 100) / progressEvent.total);
      onProgress(percentCompleted);
    },
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    cancelToken: source.token,
  };

  axios.post('/upload/single', formData, config)
    .then(response => {
      onFinish(response.data);
    })
    .catch(error => {
      if (axios.isCancel(error)) {
        console.log("Upload canceled");
      } else {
        console.error("Error uploading file:", error);
      }
    });

  return function () {
    source.cancel('Upload aborted');
  };
}
```

使用

```js
const fileInput = document.querySelector('input[type="file"]');

fileInput.addEventListener('change', function(event) {
  const file = event.target.files[0];

  const cancelUpload = uploadFile(file, 
    (progress) => {
      console.log(`Upload progress: ${progress}%`);
    }, 
    (response) => {
      console.log('Upload finished:', response);
    }
  );

  // 如果需要取消上传，可以调用 cancelUpload 函数
  // cancelUpload();
});
```



