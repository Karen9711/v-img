Vue.directive('img',{
  inserted:function(el,binding){
    var color = Math.floor(Math.random()*1000000);
    el.style.backgroundColor = '#'+color;
    var img = new Image();
    img.src = binding.value;
    img.onload = function(){
      // el.style.backgroundImage = 'url(' + binding.value + ')';
      // el.style.backgroundColor = '#fff';
    }
  }
});

var app = new Vue({
  el:'#app',
  data:{
    message:"some message",
    list:[
      {
        url:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557546456297&di=de2ffd192a04e5850e53de873bc80985&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201211%2F20%2F20121120175759_xevJR.jpeg',
      },
      {
        url:'19-01.png',
      },
      {
        url:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2771003446,464752976&fm=26&gp=0.jpg',
      }
    ]
  }
})
