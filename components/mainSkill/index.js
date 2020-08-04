// components/mainSkill/index.js
Component({
   /**
    * 组件的属性列表
    */
   properties: {
      // list: {
      //    type: Array,
      //    value: []
      // }
   },

   /**
    * 组件的初始数据
    */
   data: {
      list: [{
         value: 95,
         name: "JavaScript/ES5/ES6",
         color: "#1890ff",
      }, {
         value: 95,
         name: "HTML5/CSS3",
         color: "#1890ff",
      }, {
         value: 90,
         name: "Ant/Vant/Echart",
         color: "#1890ff",
      }, {
         value: 80,
         name: "Webpack/Vue/Uniapp",
         color: "#40a9ff",
      }, {
         value: 60,
         name: "React/Node",
         color: "#69c0ff",
      }],
      legend: [{
            text:"精通",
            value: 100,
            color: "#1890ff",
         },
         {
            text:"熟悉",
            value: 80,
            color: "#40a9ff",
         }, {
            text:"了解",
            value: 60,
            color: "#69c0ff",
         }
      ]
   },

   /**
    * 组件的方法列表
    */
   methods: {

   }
})