var EPub = require("../epub");

// var epub = new EPub("/Users/alexmeyer/Downloads/open_directories/67-231-249-98.static.as40244.net:8090/get/EPUB/Adam Bede & George Eliot-Adam Bede_2271.epub", "/imagewebroot/", "/articlewebroot/");
var epub = new EPub("/Users/alexmeyer/Downloads/open_directories/67-231-249-98.static.as40244.net:8090/get/EPUB/Colm Toibin-The Master_1981.epub", "/imagewebroot/", "/articlewebroot/");
// var epub = new EPub("alice.epub", "/imagewebroot/", "/articlewebroot/");
epub.on("error", function(err){
  console.log("ERROR\n-----");
  throw err;
});

epub.on("end", function(err){
  console.log("METADATA:\n");
  console.log(epub.metadata);

  console.log("\nSPINE:\n");
  console.log(epub.flow);

  console.log("\nTOC:\n");
  console.log(epub.toc);

  // get the chapters

  for (const chapter of epub.spine.contents) {
    epub.getChapter(chapter.id, function(err, data){
      if(err){
        console.log(err);
        return;
      }
      console.log(data.length);
      console.log(data.substr(0,512)+"..."); // first 512 bytes
    });
  }

    /*
    epub.getImage(image_id, function(err, data, mimeType){
        console.log(err || data);
        console.log(mimeType)
    });
    */
    
});

epub.parse();
