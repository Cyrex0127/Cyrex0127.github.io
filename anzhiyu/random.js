var posts=["2025/04/01/四月不是谎言/","2025/03/31/序言/","2025/03/25/开站首文/","2025/03/25/测试文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };