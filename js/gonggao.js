(function() { 
   var styles = ` 
     <style> 
       body.custom-unique-page { 
         margin: 0; 
         padding: 0; 
         font-family: Arial, sans-serif; 
       } 
       #unique-announcement-container { 
         display: none; 
         position: fixed; 
         top: 10%; 
         left: 10%; 
         right: 10%; 
         max-width: 90%; 
         background-color: #fff; 
         padding: 20px; 
         text-align: center; 
         box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
         z-index: 9999; /* 调整优先级为最高 */ 
       } 
       #unique-announcement-container h2 { 
         font-size: 55px; 
         margin-bottom: 10px; 
       } 
       #unique-announcement-container p { 
         font-size: 28px; 
         line-height: 1.5; 
         margin-bottom: 10px; 
       } 
.additional-text {
        font-size: 14px;
        position: absolute;
        bottom: 0;
        right: 0;
        margin: 10px;
      }
       .close-button { 
         font-size: 35px; 
         background-color: #4CAF50; 
         color: #fff; 
         border: none; 
         padding: 10px 20px; 
         border-radius: 4px; 
         cursor: pointer; 
       } 
     </style> 
   `; 
  
   document.head.insertAdjacentHTML('beforeend', styles); 
  
   var announcementContainer = document.createElement('div'); 
   announcementContainer.id = 'unique-announcement-container'; 
   announcementContainer.innerHTML = ` 
     <h2><B>公告</b></h2> 
      <p>本店所有套餐均为官方正规套餐（非物联卡）！免费领取，包邮到家！
     <br>所有套餐均可开热点，不限速、不虚量、无套路、无暗坑，支持5G网络：下载速度200-500mbps，个别套餐可达1000mbps！
<br><br>所有套餐均可在“中国移动、中国联通、中国电信、中国广电”APP登陆、查询、验证套餐构成及有效期。
<br><br>无合约期、无违约金！“中国电信、中国联通”均支持APP在线异地销户，不用去归属地营业厅！本店直接对口地方运营商，保证不扣违约金（个别套餐除外，已标注！），真正的无损销户！想销就销！100%成功！
   <br> “中国移动”需拨打10086或线下营业厅销户，“中国广电”只能去号码归属地营业厅销户！
     
     <br><br> 为深入贯彻落实党中央、国务院决策部署，坚决遏制电信网络诈骗犯罪高发多发姿态，切实维护广大人民群众合法权益，按照<b>《中华人民共和国刑法》《中华人民共和国治安管理处罚法》《中华人民共和国网络安全法》《互联网信息服务管理办法》</b>相关法律法规要求：  
      <br><b>严厉打击非法办理、出租、出售、购买、囤积电话卡、物联网卡、网络账号的行为！</b >
    <br>请勿抱有任何侥幸心理，贩卖出借自己的手机卡！请勿为了蝇头小利，葬送自己美好未来！<br>
若利用此卡或此卡注册的任何网络账号，参与或间接参与任何违法犯罪：均属个人行为，与本店无关！请积极配合公安机关调查，并自行承担相应的法律后果！
     <br> <br> <b>凡在本店申请任何套餐，均为默认知晓并同意上述公告！并严格遵守相应的法律法规！<p class="additional-text">恩水通信<br>2023年3月20日</p></p><br>
  
     
      <button class="close-button">我已知晓</button> 
   `; 
   document.body.appendChild(announcementContainer); 
  
   var closeButtons = document.getElementsByClassName('close-button'); 
  
   function displayAnnouncement() { 
     announcementContainer.style.display = 'block'; 
   } 
  
   function closeAnnouncement() { 
     announcementContainer.style.display = 'none'; 
  
     // 更新本地存储的时间戳为当前时间 
     var currentTime = new Date().getTime(); 
     localStorage.setItem('announcementLastVisitTime', currentTime); 
   } 
  
   function checkAnnouncement() { 
     // 检查本地存储中的时间戳 
     var lastVisitTime = localStorage.getItem('announcementLastVisitTime'); 
  
     // 获取当前时间戳 
     var currentTime = new Date().getTime(); 
  
     // 如果本地存储中没有时间戳或者当前时间距上次访问时间超过5分钟，则显示公告 
     if (!lastVisitTime || currentTime - lastVisitTime > 5 * 60 * 1000) { 
       displayAnnouncement(); 
     } 
   } 
  
   // 检查公告显示 
   checkAnnouncement(); 
  
   // 关闭公告 
   for (var i = 0; i < closeButtons.length; i++) { 
     closeButtons[i].addEventListener('click', closeAnnouncement); 
   } 
 })();