<template>
  <div class="login">
    <div class="login-slide"></div>
    <div class="login-layout">
      <div class="login-layout-content">
        <div class="login-layout-header">
          <div class="layout-header-title">
            <img
              src="https://s02.mifile.cn/assets/static/image/logo-mi2.png"
              alt=""
            />
            <span>小米账号</span>
          </div>
          <div class="layout-header-nav">
            <a href="" class="nav-item">用户协议</a>
            <a href="" class="nav-item">隐私政策</a>
            <a href="" class="nav-item">帮助中心</a>
            <div class="nav-divider"></div>
            <div class="nav-item">
              <div class="language-picker">
                中文简体
                <em class="iconfont icon-xiala"></em>
                <div class="language-dropdown">
                  <ul class="language-dropdown-menu">
                    <li class="language-dropdown-item">‎‎中文(繁體)‎</li>
                    <li class="language-dropdown-item">‎English</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="login-layout-container">
          <div class="login-card">
            <div
              class="login-switch"
              @mouseenter="popoverIsShow = !popoverIsShow"
              @mouseleave="popoverIsShow = !popoverIsShow"
            >
              <i class="login-switch-icon">
                <svg
                  width="1em"
                  height="1em"
                  fill="#fff"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M0 16.977H16.94V.036H0v16.941zM4.235 4.271h8.47v8.47h-8.47v-8.47zM19.06.036v16.941h16.94V.036H19.06zm12.706 12.706h-8.471v-8.47h8.47v8.47zM6.353 10.624h4.235V6.39H6.353v4.235zM0 36.036H16.94V19.095H0v16.94zM4.235 23.33h8.47v8.47h-8.47v-8.47zM29.647 6.389h-4.235v4.235h4.235V6.39zM19.059 36.036h4.235V31.8h-4.235v4.235zm4.235-12.706v8.47h4.235v-8.47h-4.235zm8.47 8.47H27.53v4.236H36v-8.47h-4.234V31.8zm0-8.47H36v-4.235h-4.235v4.235zM19.06 19.095v4.235h4.235v-4.235h-4.235zM6.353 29.683h4.235v-4.235H6.353v4.235z"
                  ></path>
                </svg>
              </i>
            </div>
            <div class="login-form">
              <div class="login-form-tab">
                <div>
                  <div
                    class="login-form-tab-item"
                    @click="isLogin = true"
                    :class="{ on: isLogin }"
                  >
                    登入
                  </div>
                  <div
                    class="login-form-tab-item"
                    @click="isLogin = false"
                    :class="{ on: !isLogin }"
                  >
                    注册
                  </div>
                </div>
                <div
                  class="login-link-bar"
                  :class="{ on: isLogin ? false : true }"
                ></div>
              </div>
              <div class="login-form-content" :class="{ on: !isLogin }">
                <div class="login-form-content-left">
                  <form action="">
                    <div class="mi-input" :class="{focus:userNameIsFocus}">
                      <input
                        type="text"
                        id="username"
                        class="mi-input-input"
                        @blur="userNameIsFocus = false"
                        @focus="userNameIsFocus = true"
                        v-model="username"
                      />
                      <label
                        for="username"
                        class="mi-label"
                        :class="{ 'mi-label-focus': userNameIsFocus||username?true:false}"
                        >邮箱/手机号码/小米ID</label
                      >
                    </div>
                    <div class="mi-password-wrapper">
                      <div class="mi-password" :class="{focus:passwordIsFocus}">
                        <input type="text" class="mi-password-input" @blur="passwordIsFocus = false" v-model="password"
                        @focus="passwordIsFocus = true"/>
                        <label  for="" :class="{'mi-label-focus':passwordIsFocus||password?true:false}" class="mi-label">密码</label>
                        <div class="mi-password-adornment">
                          <svg
                            viewBox="0 0 20 20"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            class="mi-password-icon"
                          >
                            <path
                              d="M19.78 7.738a.964.964 0 00-1.488-1.227 10.567 10.567 0 01-2.159 1.98 10.487 10.487 0 01-5.958 1.848 10.514 10.514 0 01-2.826-.381 10.394 10.394 0 01-1.977-.776 10.612 10.612 0 01-3.646-3.095.964.964 0 00-1.547 1.15c.487.655 1.037 1.26 1.642 1.808a.955.955 0 00-.084.17l-1.01 2.692a.964.964 0 101.806.677l.868-2.32a12.316 12.316 0 002.632 1.298l-.528 2.696a.964.964 0 101.893.371l.504-2.569c1.358.25 2.747.275 4.113.072l.44 2.417a.964.964 0 101.898-.346l-.455-2.502a12.37 12.37 0 002.381-1.029l.993 2.333a.964.964 0 001.775-.756l-1.139-2.673a12.537 12.537 0 001.871-1.838z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input type="button" class="mi-button" @click="login" value="登入">
                    <div class="mi-form-actions">
                      <div class="mi-form-action mi-form-action-start">
                        <a href="">未开发好的注册接口，请用账户yusg密码yusg进行登入</a>
                      </div>
                      <div class="mi-form-action mi-form-action-end">
                        <a href="">手机号登入</a>
                      </div>
                    </div>
                  </form>
                  <login-sns></login-sns>
                </div>
                <div class="login-form-content-right">
                  <form action="" @submit.prevent="">
                    <div class="mi-control">
                      <div class="mi-select">
                        <div class="mi-select-selection">
                          <div title="中国">中国</div>
                        </div>
                        <span class="ant-select-arrow">
                          <i class="ant-select-arrow-icon">
                            <svg
                              viewBox="0 0 20 20"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                              focusable="false"
                            >
                              <path
                                d="M4 7l6 6.667L16 7"
                                stroke="currentColor"
                                stroke-width="1.5"
                                fill-rule="evenodd"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                              ></path>
                            </svg>
                          </i>
                        </span>
                      </div>
                      <label for="" class="mi-floating">国家/地区</label>
                    </div>
                    <div class="mi-text">
                      <div class="mi-text-text">
                        <div class="mi-input-adornment">
                          <div class="mi-input-select">
                            <div class="mi-select-selection">
                              <div>+86</div>
                            </div>
                            <span class="ant-select-arrow">
                              <i class="ant-select-arrow-icon">
                                <svg
                                  viewBox="0 0 20 20"
                                  width="1em"
                                  height="1em"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  focusable="false"
                                >
                                  <path
                                    d="M4 7l6 6.667L16 7"
                                    stroke="currentColor"
                                    stroke-width="1.5"
                                    fill-rule="evenodd"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    fill="none"
                                  ></path>
                                </svg>
                              </i>
                            </span>
                          </div>
                          <label for="" class="mi-floating">国家码</label>
                        </div>
                        <div class="mi-input-phone">
                          <input type="text" class="mi-number" />
                          <label for="" class="mi-label">手机号</label>
                        </div>
                      </div>
                    </div>
                    <div class="mi-ticket">
                      <div class="mi-ticket-msg">
                        <div class="mi-msg-input">
                          <input type="text" class="mi-message" />
                          <label for="" class="mi-label">短信验证码</label>
                        </div>
                        <div class="mi-msg-btn">
                          <button>获取验证码</button>
                        </div>
                      </div>
                    </div>
                    <button class="mi-button" @click="registered">注册</button>
                    <div class="mi-form-actions">
                      <div class="mi-form-action mi-form-action-start">
                        <a href="">收不到验证码？</a>
                      </div>
                    </div>
                    <div class="mi-accept-terms">
                      已阅读并同意小米账号
                      <a href="">用户协议</a>
                      和
                      <a href="">隐私政策</a>
                    </div>
                  </form>
                  <login-sns></login-sns>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="copyright">
          小米公司版权所有-京ICP备10046444-
          <a href="">京公网安备11010802020134号</a>
          -京ICP证110507号
        </div>
      </div>
    </div>
    <div class="mi-popover" v-show="popoverIsShow">
      <div class="mi-popover-content">
        <div class="popover-inner-content">扫码登入</div>
      </div>
      <div class="mi-popover-arrow"></div>
    </div>
  </div>
</template>

<script>
import LoginSns from "../components/LoginSns";
export default {
  data() {
    return {
      popoverIsShow: false,
      isLogin: true,
      userNameIsFocus: false,
      passwordIsFocus:false,
      username:'',
      password:'',
    };
  },
  components: {
    LoginSns,
  },
  methods:{
    login(){
      let {username,password}=this;
      this.$axios.post('/user/login',{
        username,
        password
      }).then((res)=>{
        this.$cookies.set('userId',res.id,{expires:'Session'});
        this.$store.dispatch('saveUserName',res.username);
        this.$router.push({
          name:'index',
          params:{
            from:'login'
          }
        });
      })
    },
    registered(){
      this.$axios.post('/user/register',{
        username:'yusg',
        password:'yusg',
        email:'yusg@163.com'
      }).then(()=>{

      })
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/config.scss";
@import "../assets/scss/button.scss";
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  .login-slide {
    width: 375px;
    height: 100%;
    background-image: url("https://cdn.web-global.fds.api.mi-img.com/mcfe--mi-account/static/static/media/banner.a0e6fbf0.jpg");
    background-size: cover;
    background-position: 50%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
  }
  .login-layout {
    margin-left: 375px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    height: 100%;
    .login-layout-content {
      position: relative;
      min-height: 100vh;
      padding-bottom: 40px;
      .mi-button {
        margin-top: 20px;
        margin-bottom: 10px;
        width: 100%;
        color: #fff;
        background-color: #ff5c00;
        cursor: pointer;
        position: relative;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        border: none;
        opacity: 0.4;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        padding: 0 20px;
        font-size: 18px;
        font-weight: 400;
        line-height: 60px;
        height: 60px;
        border-radius: 4px;
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover {
          background: #ff7e29;
        }
      }
      .login-layout-header {
        padding: 20px;
        overflow: hidden;
        .layout-header-title {
          height: 40px;
          width: 154px;
          font-size: 26px;
          font-weight: 500;
          color: #333;
          float: left;
          img {
            width: 40px;
            height: 40px;
            vertical-align: middle;
            margin-right: 10px;
          }
          span {
            vertical-align: middle;
          }
        }
        .layout-header-nav {
          float: right;
          .nav-item {
            margin-left: 10px;
            margin-right: 10px;
            display: inline-block;
            height: 40px;
            font-size: 14px;
            font-weight: 400;
            color: #838383;
            line-height: 40px;
            vertical-align: middle;
            .language-picker {
              cursor: pointer;
              .iconfont {
                font-size: 8px;
                display: inline-block;
                transition: all 0.2s;
              }
              .language-dropdown {
                opacity: 0;
                color: rgba(0, 0, 0, 0.65);
                font-size: 14px;
                font-variant: tabular-nums;
                line-height: 1.5;
                list-style: none;
                position: absolute;
                top: 64px;
                right: 20px;
                z-index: 1050;
                transition: all 0.2s;
                .language-dropdown-menu {
                  padding: 0;
                  overflow: hidden;
                  box-shadow: 0 5px 29px 0 hsla(0deg, 0%, 64%, 20%);
                  border-radius: 4px;
                  .language-dropdown-item {
                    font-size: 14px;
                    text-align: center;
                    padding: 9px 14px;
                    line-height: 22px;
                    white-space: nowrap;
                    cursor: pointer;
                    &:hover {
                      background-color: #fff3e6;
                      color: #333;
                    }
                  }
                }
              }
              &:hover {
                color: $colorA;
                .iconfont {
                  transform: rotate(180deg);
                }
                .language-dropdown {
                  opacity: 1;
                }
              }
            }
          }
          .nav-divider {
            vertical-align: middle;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
            height: 14px;
            width: 0;
            border-right: 1px solid #ddd;
          }
        }
      }
      .login-layout-container {
        padding-top: 20px;
        position: relative;
        text-align: center;
        .login-card {
          width: 360px;
          text-align: left;
          display: inline-block;
          box-sizing: border-box;
          border-radius: 4px;
          padding: 40px 45px;
          position: relative;
          margin: 0 auto 80px;
          min-width: 450px;
          box-shadow: 0 20px 50px 0 hsla(0deg, 0%, 64%, 0.1);
          .login-switch {
            width: 64px;
            height: 64px;
            position: absolute;
            right: 0;
            top: 0;
            opacity: 0.4;
            box-sizing: border-box;
            border-width: 32px;
            border-style: solid;
            border-color: #ff5c00 #ff5c00 rgba(0, 0, 0, 0) rgba(0, 0, 0, 0);
            transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
            &:hover {
              opacity: 1;
              cursor: pointer;
            }
            .login-switch-icon {
              position: absolute;
              font-size: 36px;
              top: -22px;
              right: -22px;
              display: inline-block;
              color: inherit;
              font-style: normal;
              line-height: 0;
              text-align: center;
              text-transform: none;
              vertical-align: -0.125em;
              text-rendering: optimizeLegibility;
            }
          }
          .login-form {
            width: 360px;
            overflow: hidden;
            .login-form-tab {
              font-size: 22px;
              font-weight: 400;
              position: relative;
              margin-bottom: 10px;
              color: #bbb;
              .login-form-tab-item {
                padding: 0 0 4px;
                margin: 0 20px 0 0;
                height: 41px;
                line-height: 41px;
                display: inline-block;
                cursor: pointer;
                &.on {
                  color: #333;
                }
              }
              .login-link-bar {
                width: 44px;
                height: 4px;
                border-radius: 2px;
                position: absolute;
                background-color: $colorA;
                z-index: 1;
                bottom: 1px;
                transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                  width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
                  left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                  -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
                transform: translateX(0px);
                &.on {
                  transform: translateX(64px);
                }
              }
            }
            .login-form-content {
              .mi-label-focus {
                top: 6px !important;
                font-size: 12px !important;
                color: #aaa !important;
              }
              .focus{
                border-color: $colorA!important;
                background: #fff!important;
              }
              min-height: 375px;
              padding: 20px 2px 0;
              display: flex;
              width: 720px;
              margin-left: 0;
              box-sizing: border-box;
              transition: margin-left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                width 0.2s cubic-bezier(0.645, 0.045, 0.355, 1),
                left 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
                -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
              &.on {
                margin-left: -360px;
                .login-form-content-left {
                  opacity: 0;
                }
                .login-form-content-right {
                  opacity: 1;
                }
              }
              .mi-form-actions {
                overflow: hidden;
                .mi-form-action {
                  max-width: 50%;
                  font-size: 17px;
                  margin-bottom: 10px;
                  a {
                    color: #ff5c00;
                    text-decoration: none;
                    background-color: rgba(0, 0, 0, 0);
                    outline: none;
                    cursor: pointer;
                    transition: color 0.3s;
                    &:hover {
                      color: #ff7e29;
                    }
                  }
                }
                .mi-form-action-start {
                  float: left;
                }
                .mi-form-action-end {
                  float: right;
                }
              }
              .login-form-content-left {
                flex: 1;
                > form {
                  min-height: 375px;
                  .mi-input {
                    position: relative;
                    width: 100%;
                    color: rgba(0, 0, 0, 0.65);
                    font-size: 14px;
                    background: #f9f9f9;
                    border-radius: 4px;
                    height: 60px;
                    border: 1px solid rgba(0, 0, 0, 0);
                    box-sizing: border-box;
                    .mi-input-input {
                      padding: 30px 20px 10px;
                      width: 100%;
                      height: 60px;
                      box-sizing: border-box;
                      border: none;
                      font-size: 17px;
                      color: #333;
                      line-height: 20px;
                      background: rgba(0, 0, 0, 0);
                    }
                    .mi-label {
                      position: absolute;
                      left: 20px;
                      top: 20px;
                      height: 20px;
                      font-weight: 400;
                      font-size: 17px;
                      color: rgba(0, 0, 0, 0.4);
                      line-height: 20px;
                      transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                        color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                    }
                  }
                  .mi-password-wrapper {
                    margin-top: 20px;
                    width: 100%;
                    .mi-password {
                      border-radius: 4px;
                      background: #f9f9f9;
                      position: relative;
                      width: 100%;
                      height: 60px;
                      border: 1px solid rgba(0, 0, 0, 0);
                      box-sizing: border-box;
                      .mi-password-input {
                        padding: 30px 20px 10px;
                        width: 100%;
                        box-sizing: border-box;
                        border: none;
                        font-size: 17px;
                        color: #333;
                        height: 60px;
                        line-height: 20px;
                        background: rgba(0, 0, 0, 0);
                      }
                      .mi-label {
                        position: absolute;
                        left: 20px;
                        top: 20px;
                        height: 20px;
                        font-weight: 400;
                        font-size: 17px;
                        color: rgba(0, 0, 0, 0.4);
                        line-height: 20px;
                        transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                          font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                          color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                      }
                      .mi-password-adornment {
                        cursor: pointer;
                        position: absolute;
                        right: 0;
                        top: 10px;
                        vertical-align: middle;
                        .mi-password-icon {
                          color: rgba(0, 0, 0, 0.25);
                          transition: all 0.3s
                            cubic-bezier(0.645, 0.045, 0.355, 1);
                          vertical-align: middle;
                          margin: 10px 20px;
                          width: 20px;
                          height: 20px;
                        }
                      }
                    }
                  }
                }
              }
              .login-form-content-right {
                flex: 1;
                opacity: 0;
                form {
                  .mi-floating {
                    cursor: pointer;
                    top: 6px;
                    font-size: 12px;
                    color: #aaa;
                    position: absolute;
                    left: 20px;
                    height: 20px;
                  }
                  .mi-select-selection {
                    padding-top: 30px;
                    line-height: 20px;
                    margin-left: 20px;
                    margin-right: 24px;
                    position: relative;
                    display: block;
                    > div {
                      max-width: 100%;
                      overflow: hidden;
                      white-space: nowrap;
                      text-overflow: ellipsis;
                    }
                  }
                  .ant-select-arrow {
                    pointer-events: none;
                    right: 21px;
                    margin-top: -10px;
                    font-size: 20px;
                    display: inline-block;
                    font-style: normal;
                    text-align: center;
                    text-transform: none;
                    vertical-align: -0.125em;
                    text-rendering: optimizeLegibility;
                    position: absolute;
                    top: 50%;
                    color: rgba(0, 0, 0, 0.25);
                    line-height: 1;
                    transform-origin: 50% 50%;
                    .ant-select-arrow-icon {
                      color: inherit;
                      font-style: normal;
                      text-align: center;
                      text-transform: none;
                      vertical-align: -0.125em;
                      text-rendering: optimizeLegibility;
                      line-height: 1;
                      display: block;
                    }
                  }
                  .mi-control {
                    position: relative;
                    background: #f9f9f9;
                    border-radius: 4px;
                    border: 1px solid rgba(0, 0, 0, 0);
                    box-sizing: border-box;
                    height: 60px;
                    .mi-select {
                      width: 100%;
                      font-size: 17px;
                      font-weight: 400;
                      color: #333;
                      line-height: 1.5;
                      position: relative;
                      display: inline-block;
                      outline: 0;
                      height: 60px;
                      box-sizing: border-box;
                    }
                  }
                  .mi-text {
                    margin-top: 20px;

                    .mi-text-text {
                      position: relative;
                      background: #f9f9f9;
                      border-radius: 4px;
                      border: 1px solid rgba(0, 0, 0, 0);
                      box-sizing: border-box;
                      height: 60px;
                      display: flex;
                      .mi-input-adornment {
                        width: 40%;
                        .mi-input-select {
                          width: 100%;
                          font-size: 17px;
                          font-weight: 400;
                          color: #333;
                          line-height: 1.5;
                          position: relative;
                          display: inline-block;
                          outline: 0;
                          height: 60px;
                          box-sizing: border-box;
                        }
                      }
                      .mi-input-phone {
                        position: relative;
                        .mi-number {
                          padding: 30px 20px 10px;
                          width: 100%;
                          
                          box-sizing: border-box;
                          font-size: 17px;
                          color: #333;
                          line-height: 20px;
                          background: rgba(0, 0, 0, 0);
                          border: none;
                        }
                        .mi-label {
                          position: absolute;
                          left: 20px;
                          top: 20px;
                          height: 20px;
                          font-weight: 400;
                          font-size: 17px;
                          color: rgba(0, 0, 0, 0.4);
                          line-height: 20px;
                          transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                      }
                    }
                  }
                  .mi-ticket {
                    margin-top: 20px;
                    .mi-ticket-msg {
                      position: relative;
                      background: #f9f9f9;
                      border-radius: 4px;
                      border: 1px solid rgba(0, 0, 0, 0);
                      box-sizing: border-box;
                      height: 60px;
                      display: flex;
                      .mi-msg-input {
                        width: 70%;
                        height: 60px;
                        .mi-message {
                          padding: 30px 20px 10px;
                          width: 100%;
                          height: 60px;
                          box-sizing: border-box;
                          border: none;
                          font-size: 17px;
                          color: #333;
                          line-height: 20px;
                          background: rgba(0, 0, 0, 0);
                        }
                        .mi-label {
                          position: absolute;
                          left: 20px;
                          top: 20px;
                          height: 20px;
                          font-weight: 400;
                          font-size: 17px;
                          color: rgba(0, 0, 0, 0.4);
                          line-height: 20px;
                          transition: top 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            font-size 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                            color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
                        }
                      }
                      .mi-msg-btn {
                        flex: 1;
                        height: 60px;
                        line-height: 60px;
                        button {
                          color: $colorA;
                          background-color: rgba(0, 0, 0, 0);
                          border-color: rgba(0, 0, 0, 0);
                          box-shadow: none;
                          outline: none;
                          line-height: 1.499;
                          position: relative;
                          display: inline-block;
                          font-weight: 400;
                          white-space: nowrap;
                          text-align: center;
                          background-image: none;
                          cursor: pointer;
                          touch-action: manipulation;
                          height: 32px;
                          padding: 0 15px;
                          font-size: 14px;
                          border-radius: 4px;
                          user-select: none;
                          &:hover {
                            color: #ff7e29;
                          }
                        }
                      }
                    }
                  }
                  .mi-accept-terms {
                    font-size: 14px;
                    font-weight: 400;
                    color: #aaa;
                    line-height: 20px;
                    text-align: center;
                    padding-bottom: 10px;
                    a {
                      color: #333;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .copyright {
        padding: 0 20px;
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        left: 0;
        right: 0;
        position: absolute;
        bottom: 20px;
        color: #999;
        font-size: 12px;
        a {
          color: #999;
        }
      }
    }
  }
  .mi-popover {
    font-size: 14px;
    line-height: 1.5;
    position: absolute;
    z-index: 1000;
    font-weight: 400;
    padding-right: 10px;
    box-sizing: border-box;
    left: 967px;
    top: 111px;
    .mi-popover-content {
      background-clip: padding-box;
      border-radius: 4px;
      box-shadow: 0 2px 4px 0 rgba(255, 105, 0, 0.45);
      background-color: #ff5c00;
      .popover-inner-content {
        padding: 5px 15px;
        color: #fff;
      }
    }
    .mi-popover-arrow {
      box-shadow: 0 2px 4px 0 rgba(255, 105, 0, 0.45);
      border-color: #ff5c00;
      width: 10px;
      height: 10px;
      border-width: 5px;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: 6px;
      position: absolute;
      display: block;
      background: rgba(0, 0, 0, 0);
      border-style: solid;
      box-sizing: border-box;
    }
  }

  @media screen and (max-width: 1000px) {
    & > .login-layout {
      margin-left: 200px;
    }
    & > .login-slide {
      width: 200px;
    }
  }
  @media screen and (max-width: 800px) {
    & > .login-layout {
      margin-left: 0;
    }
    & > .login-slide {
      display: none;
    }
  }
}
</style>
