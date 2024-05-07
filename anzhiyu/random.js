var posts=["2024/05/07/C++笔记和项目/","2024/05/06/关于网站/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };