// pages/post-dedail/post-dedail.js
import {postList} from '../../data/posts-data.js'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData:{},
    collected:false,
    isPlaying:false,
    _pid:null,
    _postsCollected:{},
    _mgr:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    const postData = postList[options.pid]
    this.data._pid = options.pid
    const postsCollected = wx.getStorageSync('posts_collected')
    if(postsCollected){
    this.data._postsCollected = postsCollected
    }
    let collected = postsCollected[this.data._pid]
    if(collected === undefined){
      // 如果undefined，表明文章没被收藏过
      collected = false
    }
    // console.log(collected)
    // console.log(postscollected)
    // this.setData({
    //   collected
    // })
    // console.log(postData)
    this.setData({
      postData,
      collected,
      isPlaying: this.currentMusicIsPlaying()
    })

    const mgr = wx.getBackgroundAudioManager()
    this.data._mgr = mgr
    mgr.onPlay(this.onMusicStart)
    mgr.onPause(this.onMusicStop)
  },
  onMusicStart(event){
    const mgr = this.data._mgr
    // mgr.onPlay(()=>{

    // })
    const music = postList[this.data._pid].music
    mgr.src = music.url
    mgr.title = music.title
    mgr.coverImgUrl = music.coverImg

    app.gIsPlayingMusic = true
    app.gIsPlayingPostId = this.data._pid
    this.setData({
      isPlaying:true
    })
  },

  currentMusicIsPlaying(){
    if(app.gIsPlayingMusic && app.gIsPlayingPostId === this.data._pid){
      return true
    }
    return false
  },
  onMusicStop(event){
    const mgr = this.data._mgr
    mgr.pause()
    app.gIsPlayingMusic = false
    app.gIsPlayingPostId = -1
    this.setData({
      isPlaying:false
    })
  },

  async onShare(event){
    const result = await wx.showActionSheet({
      itemList: ['分享到QQ','分享到微信','分享到朋友圈'],
    })
    console.log(result)
  },

   async onCollect(event){
    const postsCollected = this.data._postsCollected
    // wx.getStorageSync('key')
    postsCollected[this.data._pid] = !this.data.collected
    // this.data.collected = true
    this.setData({
      collected:!this.data.collected
    })
    // 这里赋值了
    wx.setStorageSync('posts_collected',postsCollected)
    wx.showToast({
      title: this.data.collected?'收藏成功':'取消收藏',
      // mask:true,
      // 无法再次点击
      duration:1000
      // 停留时间
    })
    // 轻提示

    // const result =await wx.showModal({
    //   title:'是否收藏文章'
    // })
    // // console.log(result)
    // if(result.confirm){
    //   const postsCollected = this.data._postsCollected
    //   postsCollected[this.data._pid] = !this.data.collected
    //   this.setData({
    //     collected:!this.data.collected
    //   })
    //   wx.setStorageSync('posts_collected',postsCollected)
    // }
    
    // 确认提示
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