function copyText1() { 
       var textToCopy = "https://red.odeiot.net/userIndex"; 
       copyTextToClipboard(textToCopy); 
     } 
  
     function copyText2() { 
       var textToCopy = "enshui1973"; 
       copyTextToClipboard(textToCopy); 
     } 
  
     function copyTextToClipboard(text) { 
       var tempInput = document.createElement("input"); 
       tempInput.setAttribute("value", text); 
       document.body.appendChild(tempInput); 
       tempInput.select(); 
       document.execCommand("copy"); 
       document.body.removeChild(tempInput); 
       alert("地址已复制！请在微信聊天输入框内长按，即可粘贴！发送后点击地址即可跳转！"); 
       window.location.href = "weixin://"; 
     }
