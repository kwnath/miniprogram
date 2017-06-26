// /pages/form/form.js
const AV = require('../../utils/av-weapp-min.js');
const FML = require('../../model/fml.js');

var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    plain: true
  },

  fmlSubmit: function (e) {
    this.setData({
      loading: !this.data.loading
    })
    var nickName = e.detail.value.nickName
    var story = e.detail.value.story

    var acl = new AV.ACL();
    acl.setPublicReadAccess(true);
    acl.setPublicWriteAccess(true);
    console.log(nickName)
    console.log(story)
    setTimeout(function () {
      new FML({
        nickName: nickName,
        story: story,
        upvote: 0
      }).setACL(acl).save().catch(console.error);
      wx.reLaunch({
        url: '/pages/index/index?FML=1'
      });
    }, 2000);
  },

  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
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