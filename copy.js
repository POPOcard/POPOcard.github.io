function copyText1() {
      var textToCopy = "恩水通信";
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
      alert("文字已复制成功！请自行搜索长按粘贴即可");
      window.location.href = "weixin://";
    }