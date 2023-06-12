
 function validatePassword(event) {
      event.preventDefault(); // 阻止表单提交
      
      var passwordInput = document.getElementById("password");
      var password = passwordInput.value;
      
      // 在此处添加你的密码验证逻辑
      if (password === "enshuitongxin111") {
        window.location.href = "https://www.example.com"; // 替换为你要跳转的网址
      } else {
        disableFormForDuration(5); // 禁用表单 5 分钟
      }
    }

    function disableFormForDuration(minutes) {
      var form = document.querySelector("form");
      var inputs = form.querySelectorAll("input");
      
      // 禁用所有输入框
      for (var i = 0; i < inputs.length; i++) {
        inputs[i].disabled = true;
      }
      
      // 设置一段时间后启用输入框
      setTimeout(function() {
        for (var i = 0; i < inputs.length; i++) {
          inputs[i].disabled = false;
        }
      }, minutes * 60 * 1000); // 将分钟转换为毫秒
    }
