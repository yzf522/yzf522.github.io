var posts=["2024/05/06/hello-world/","2024/05/06/第一次测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };