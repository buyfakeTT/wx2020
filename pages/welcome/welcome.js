// pages/welocome/welcome.js
Page({
  // logbtn:function(options){
  //   //点击跳转
  //   wx.navigateTo({
  //     //switchTab只能跳转有tab的页面
  //     //不带tab用redirectTo或者navigateTo
  //     url: '../posts/posts',
  //   })
  // },

  /**
   * 页面的初始数据
   */
  data: {
      
  },
  onTap:function(params) {
    wx.switchTab({
      url:"/pages/posts/posts"
    })
  
        // 关闭上一个页面跳转,销毁上一个页面
        
      // wx.navigateTo({
      //   url: 'url',
      // })保存跳转到下一页面
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
