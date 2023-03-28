/**
 ** Module : EXT-Welcome
 ** @bugsounet
 ** ©03-2023
 ** support: https://forum.bugsounet.fr
 **/

Module.register("EXT-Welcome", {
  defaults: {
    welcome: "brief Today"
  },

  getDom: function() {
    var dom = document.createElement("div")
    dom.style.display = 'none'
    return dom
  },

  notificationReceived: function(noti, payload,sender) {
    switch(noti) {
      case "GW_READY":
        if (sender.name == "Gateway") {
          this.sendSocketNotification("INIT")
          this.sendNotification("EXT_HELLO", this.name)
          this.sendNotification("GA_ACTIVATE",{type: "TEXT", key: this.config.welcome, chime: false})
        }
        break
    }
  }
})
