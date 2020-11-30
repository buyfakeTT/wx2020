// pages/posts/posts.js
import {postList} from '../../data/posts-data.js'
Page({
  // backBtn:function(){
  //   wx.navigateBack()
  // },
  /**
   * 页面的初始数据
   */
  data: {
    res:{
      
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    wx.setStorageSync('flag', 2)

    const flag = await wx.getStorage({
      key: 'flag',
    })
    // wx.removeStorageSync('flag')
    // 删除缓存
    this.setData({
      // postList:postList  ES6简写
      postList
    })
    //   console.log(postList)
  },



  onGoToDetail(event){
    // console.log(event)
    // console.log(event.currentTarget.dataset.postId)
    const pid = event.currentTarget.dataset.postId | event.detail.pid
      wx.navigateTo({
        url: '/pages/post-dedail/post-dedail?pid=' + pid
      })
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