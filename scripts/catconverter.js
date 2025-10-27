const catURL = chrome.runtime.getURL("assets/cat.jpg");

function catify(img){
    if(img instanceof HTMLImageElement && img.src !== catURL){
        img.src = catURL;
        console.log("I found an image and now it's a cat! :3");
    }
}
document.querySelectorAll("img").forEach(catify);

const observer = new MutationObserver((mutations) => {
    for(const mutation of mutations){
        if(mutation.type === "attributes" && mutation.target.tagName === "IMG"){
            catify(mutation.target)
        }
        if(mutation.type == "childList")
        for(const node of mutation.addedNodes){
            if(node instanceof Element){
                if(node.tagName==='IMG'){
                    node.src = catURL;
                    console.log("I found an image and now it's a cat! :3");
                }
                node.querySelectorAll("img")?.forEach(catify);
            }
        }
    }
});
observer.observe(document.body,{
    childList:true,
    subtree:true,
    attributes:true,
    attributeFilter:["src","srcset"]
});