// pages/todus/todus.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //文本框数据模型
    input:'',
    todos:[
    ],
    letcount:0,
    all:false
  },
  add:function(){
   var todos=this.data.todos;
   if(!this.data.input){return
   }else
 todos.push({name:this.data.input, completed:false});
    this.setData({todos:todos ,letcount:this.data.letcount + 1,input:''})
  },
  hander:function(e){
   
     this.setData({input:e.detail.value}); 
    
  },
  choose:function(e){
   var i=e.currentTarget.dataset.set;
    var todos=this.data.todos;
   
    todos[i].completed=!todos[i].completed;
    
    var a=[];
    todos.forEach(function(item){
      if(!item.completed){
        a.push(item);
      }
    })
    console.log(a.length)
    this.setData({todos:this.data.todos,letcount:a.length})
  },

    js:function(e){
     var todos=this.data.todos;
     todos.splice(e.currentTarget.dataset.index,1);
     console.log(todos.length)
      var a=[];
     todos.forEach(function(item){
       if(!item.completed){
         a.push(item);
       }
     })
     console.log(a.length)
     this.setData({todos:todos,letcount:a.length})
   },
   tas:function(){
  var c= this.data.all
   c =!this.data.all;
     var todos=this.data.todos;
     var a=[];
     todos.forEach(function(item){
          item.completed=c;
        if(!item.completed){
          a.push(item);
        }
     })
     
     this.setData({todos:todos,all:c,letcount:a.length});
   },
   cool:function(){
      var  todos=[]
     var d= this.data.todos;
      d.forEach(function(item){
        if(!item.completed){
          todos.push(item)
        }
      })
      this.setData({todos:todos,letcount:todos.length});
      console.log(this.data.todos)
   }

  
})