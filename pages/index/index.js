// pages/index/index.js
const app = getApp();
const collCfg = app.collCfg;
Page({
   /**
    * 页面的初始数据
    */
   data: {
      width: 0,
      height: 0,
      activeName: collCfg.activeName, //折叠组件默认打开项
      collItems: collCfg.collItems, //折叠组件子项渲染数据
      userInfo: { //定义用户信息
         name: "李超",
         spell: "L C",
         worker: "Web前端开发工程师"
      }
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
      //本地测试直接获取后台数据
      //this.getData();
   },
   /**
    * 生命周期函数--监听页面初次渲染完成
    */
   onReady: function () {
      //获取子组件实例
      // this.share = this.selectComponent("#share");
   },

   /**
    * 生命周期函数--监听页面显示
    */
   onShow: function () {
      var width = wx.getSystemInfoSync().windowWidth;
      var height = wx.getSystemInfoSync().windowHeight;
      this.setData({
         width: width,
         height: height
      })
   },

   /**
    * 生命周期函数--监听页面隐藏
    */
   onHide: function () {

   },


   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function () {

   },

   /**
    * 用户点击右上角分享
    */
   onShareAppMessage: function () {

   },
   /**
    * 折叠组件change回调
    */
   collChange: function (e) {
      this.setData({
         activeName: e.detail
      });
   },
   /**
    * share组件点击回调
    */
   getNameHand: function (e) {
      console.log(e);
   },
   /**
    * 请求数据
    */
   getData: function () {
      wx.request({
         url: 'http://v.juhe.cn/toutiao/index',
         data: {
            type: "top",
            key: "fe7145b5b0c3868c9d6f276b69146971"
         },
         dataType: 'json',
         method: 'GET',
         success: function (res) {
            console.log(res);
         }
      })
   },
})