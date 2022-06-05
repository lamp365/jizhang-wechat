//index.js
let c = require('../../utils/common.js');
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName'), // 如需尝试获取用户信息可改为false
    type: null,
    key: null
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (options) {
    var that = this
    if(c.checkStrNotNull(options.type)){
      that.setData({
        type: options.type
      });
      if (c.checkStrNotNull(options.key)) {
        that.setData({
          key: options.key
        });

      }
    }
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    //在这里一进入就获取之前存储的账单id
    app.globalData.account_book_id = wx.getStorageSync("account_book_id");
    //判断session是否过期
    wx.checkSession({
      success() {
        //session_key 未过期，并且在本生命周期一直有效
        that.checkUserInfoAndOpenid();
      },
      fail() {
        // session_key 已经失效，需要重新执行登录流程
        that.wxLogin()
      }
    })
    
  },
  checkUserInfoAndOpenid: function(){
    let vm = this;
    var user = wx.getStorageSync('user') || {};
    if (!user.openid){
      vm.wxLogin();
    } else {
      app.globalData.appUserInfo = user
      vm.setData({
        userInfo: app.globalData.appUserInfo,
        hasUserInfo: true
      })
      vm.toHome();
    }
  },
  wxLogin: function (){
    let vm = this;
    wx.login({
      success(res) {
        console.log(res);
        if (res.code) {
           //发起网络请求
          c.request(
            "/index/wxlogin",
            {
              code: res.code
            },
            function (success, data) {
              if(!success){
                vm.setData({
                  hasUserInfo: false
                })
                app.globalData.regetToken = false;
                return;
              }
              app.globalData.appUserInfo = data.data;
              wx.setStorageSync('user', data.data);
              if(data.data.head_img!==null){
                vm.toHome();
              }
            },
            'GET'
          );
          
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  getUserProfile: function() {
    let vm = this;
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        let userInfo = wx.getStorageSync('user');
        userInfo.nickname = res.userInfo.nickName;
        userInfo.head_img = res.userInfo.avatarUrl;
        wx.setStorageSync("user",userInfo);
        vm.setData({
          userInfo: userInfo,
          hasUserInfo: true
        });
        app.globalData.appUserInfo = userInfo
        vm.updateUserInfo();
      }
    })
  },
  toHome: function() {
    //到首页前先来处理分享的数据
    if (this.data.type!=null){
      if(this.data.type=='share'){
        this.addToAbUser();
        //执行完后置空
        this.data.type = null;
      }
    }
    wx.switchTab({
      url: '../jizhang/index'
    })
  },
  addToAbUser:function(){
    let vm = this;
    c.request(
      "/AccountBooks/addUserToAb",
      {
        key: vm.data.key
      },
      function (success, data) {
        if(success){
          app.globalData.account_book_id = data.data;
          wx.setStorageSync('account_book_id', data.data);
        }
        vm.toHome();
      }
    );
  },
  updateUserInfo:function(){
    let vm = this;
    c.request(
      "/User/updateWxUserInfo",
      {
        userInfo:{head_img: app.globalData.appUserInfo.head_img,
                  nickname: app.globalData.appUserInfo.nickname}
      },
      function (success, data) {
        vm.toHome();
      }
    );
  }
})
