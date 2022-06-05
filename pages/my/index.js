// pages/my/index.js
let app = getApp().globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    head_img:'',
    nickname:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let head_img = app.appUserInfo.head_img
    let nickname = app.appUserInfo.nickname
    this.setData({
      nickname: nickname,
      head_img:head_img
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  },
  toZc(){
    wx.navigateTo({
      url: '../balance/index',
    })
  }


})