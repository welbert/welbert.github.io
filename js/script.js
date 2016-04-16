function onInit() {
   document.getElementById("loadGif").style.width = (window.innerHeight * 50)
   / 100 + "px";
   document.getElementById("loadGif").style.height = (window.innerHeight * 50)
   / 100 + "px";
   //document.getElementById("loadGif").style.marginTop = (window.innerHeight * 20)
   /// 100 + "px";

   document.getElementById("topDiv").style.width = window.innerWidth
         + "px";
   document.getElementById("botDiv").style.width = window.innerWidth
         + "px";
   document.getElementById("topDiv").style.height = (window.innerHeight * 10)
         / 100 + "px";
   document.getElementById("botDiv").style.height = (window.innerHeight * 10)
         / 100 + "px";
   document.getElementById("midDiv").style.width = window.innerWidth
   + "px";
   document.getElementById("midDiv").style.height = (window.innerHeight * 82)
   / 100 + "px";

   if(window.innerWidth - window.innerHeight <= 0){
      document.getElementById("mySelf").style = "display: none;";

      document.getElementById("littleMySelf").style =
         "filter: drop-shadow(12px 12px 12px rgba(0, 0, 0, 0.6));display: block;box-shadow: 6px 6px 12px rgb(0, 0, 0);";
      document.getElementById("littleMySelf").style.width =
         (window.innerHeight * 20)/ 100 + "px";
   }else{
      document.getElementById("mySelf").style =
         "filter: drop-shadow(12px 12px 12px rgba(0, 0, 0, 0.6));display: block;box-shadow: 6px 6px 12px rgb(0, 0, 0);";
      document.getElementById("mySelf").style.width = (window.innerHeight * 60)
      / 100 + "px";

      document.getElementById("littleMySelf").style = "display: none;";
   }
}
