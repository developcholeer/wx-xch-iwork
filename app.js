//app.js
App({
   //简历page扩展组件参数配置
   collCfg: {
      accordion: true, //只打开一个
      activeName: "", //默认打开项
      collItems: [{
         title: "基本信息",
         name: "baseInfo"
      }, {
         title: "主要技能",
         name: "mainSkill"
      }, {
         title: "教育经历",
         name: "educateExp"
      }, {
         title: "工作经历",
         name: "workExp"
      }, {
         title: "项目经验",
         name: "projectExp"
      }, {
         title: "专业技能",
         name: "zySkill"
      },{
         title: "自我评价",
         name: "selfComit"
      }]
   }
})