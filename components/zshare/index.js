// components/share/index.js
Component({
   /**
    * 组件的属性列表
    * 用于接受父组件传值、类似vue的props
    */
   properties: {
      name:{
         type:String,
         value:""
      },
   },

   /**
    * 组件的初始数据
    */
   data: {
      text:"分享"
   },

   /**
    * 组件的方法列表
    */
   methods: {
      //子组件点击事件
      getName(){
         this.triggerEvent("getNameHand",this.data.name)
      }
   }
})
