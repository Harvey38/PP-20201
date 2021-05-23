let constraints = {video:true, audio:true};
let videoPlayer = document.querySelector('video');
let vidRecordBtn = document.querySelector('#record-video');
let mediaRecorder;
let recordState = false;
let chunks = [];
vidRecordBtn.addEventListener("click",function(){
    if(mediaRecorder!=undefined)
    {
    if(recordState==false)
    {
        recordState=true;
        mediaRecorder.start();
        vidRecordBtn.innerText = 'Recording...'
    }
    else{
        recordState=false;
        mediaRecorder.stop();
        vidRecordBtn.innerText = 'Record';
    }
}
})
navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream){
    videoPlayer.srcObject=mediaStream;
  mediaRecorder = new MediaRecorder(mediaStream);
  mediaRecorder.ondataavailable = function(e){
      chunks.push(e.data)
  }
  mediaRecorder.onstop=function()
  {
      let blob = new Blob(chunks,{type:'video/mp4'});
      chunks =[];
      let blobUrl = URL.createObjectURL(blob);
      var link = document.createElement('a');
      link.href = blobUrl;
      link.download='video.mp4';
      link.click();
      link.remove();
  }


}).catch(function(err){
    console.log(err);
})