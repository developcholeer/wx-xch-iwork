//app.js
App({
   //简历page扩展组件参数配置
   collCfg: {
      accordion: true, //只打开一个
      activeName: "baseInfo", //默认打开项
      collItems: [{
         title: "基本信息",
         name: "baseInfo"
      }, {
         title: "主要技能",
         name: "mainSkill"
      }, {
         title: "教育经历",
         name: "educAtion"
      }]
   }
})