// Google API Credential key:
// AIzaSyAOF_sykYAWj5B3BtdZkyC-qOcpPguAptM   

// $(document).ready(function() { 
    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;
    window.onload = function onYouTubeIframeAPIReady() {
      player = new YT.Player('player',{
        autoplay: 1,
        loop: 1,
        height: '390',
        width: '640',
        videoId: 'LTy1FLAS8SA',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
    // var player1;
  
     function onYouTubeIframeAPIReady(){
      
      player = new YT.Player('player1',{
        autoplay: 1,
        loop: 1,
        height: '200',
        width: '200',
        videoId: 'VFns_niFve4',
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
  
    }
  //  window.onload = function onYouTubeIframeAPIReady(){
      
  //     player = new YT.Player('player2',{
  //       autoplay: 1,
  //       loop: 1,
  //       height='315',
  //       width='560', 
  //       videoId: 'P4AN8IdR_mgVFns_niFve4',
  //       events: {
  //         'onReady': onPlayerReady,
  //         'onStateChange': onPlayerStateChange
  //       }
  //     });
  //   }

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
      event.target.playVideo();
      // document.getElementById('player1').event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
  var done = false;
  function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 50000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }


  // /* code here */ });
