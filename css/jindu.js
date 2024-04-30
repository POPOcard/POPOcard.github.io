    document.addEventListener("readystatechange", function() {
      var progressBar = document.getElementById('myBar');
      var progressText = document.getElementById('progressText');
      var progressContainer = document.getElementById('progressContainer');
      var content = document.getElementById('content');

      function updateProgress() {
        var currentProgress = Math.min(((document.readyState === 'interactive' ? 0.5 : 1) * 100), 100);
        progressBar.style.width = currentProgress + '%';
        progressText.textContent = Math.round(currentProgress) + '%';

        if (document.readyState === 'complete') {
          setTimeout(function() {
            progressContainer.classList.add('hide-progress');
          }, 100);
        }
      }

      document.addEventListener('readystatechange', updateProgress);

      if (document.readyState === 'interactive' || document.readyState === 'complete') {
        content.style.display = 'block';
      }
    });