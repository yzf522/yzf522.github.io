var posts=["2024/05/07/C++案例练习/","2024/05/06/关于网站/","2024/05/07/C++笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };