function shorten(longUrl) {
  if(longUrl == "") return "";
  if(longUrl.substring(0,6) == "#ERROR") return "";
  if(longUrl.substring(0,8) == "Thinking") return "";
  
  var key = "YOUR_KEY";
  var serviceUrl="https://www.googleapis.com/urlshortener/v1/url?key="+key;
  
  var options={
    muteHttpExceptions:true,
    method:"post",
    contentType: "application/json",
    payload : Utilities.jsonStringify({'longUrl': longUrl })
  };
  
  var response=UrlFetchApp.fetch(serviceUrl, options);
  
  if(response.getResponseCode()==200){
    var content=Utilities.jsonParse(response.getContentText());
    if(content!=null & content["id"]!=null)
      return content["id"];
  }
  
  return longUrl;
}
