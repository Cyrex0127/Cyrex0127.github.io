var posts=["2025/04/08/关于Cyrex/","2025/04/01/四月不是谎言/","2025/03/31/序言/","2025/03/25/开站首文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };