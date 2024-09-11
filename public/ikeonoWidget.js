const locations = [{"shopId":"12345678-1111-1111-1111-111111111111","name":"Specialized - Carlsbad"}];
const defaultLocation = "12345678-1111-1111-1111-111111111111";
const hideButton = true;
(function(e,o){if(e.ikeono){console.error("Ikeono embed already included");return}e.ikeono={};var n=["init"];e.ikeono._beforeLoadCallQueue=[];n.forEach(o=>{e.ikeono[o]=function(){e.ikeono._beforeLoadCallQueue.push([o,arguments])}});var t=o.createElement("script");t.type="text/javascript";t.async=true;t.src="https://ik-widget.ngrok.io/ikwshim.js";var i=o.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i)})(window,document);ikeono.init(defaultLocation, '#333333', false, false, 0, locations, hideButton);
