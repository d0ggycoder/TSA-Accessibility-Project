const mutationHandler = new MutationObserver((mutations) => {
    for(const mutation of mutations){
        if(mutation.type === "attributes"){
            DynamicModifier.runUpdates(mutation.target);
        } else if(mutation.type == "childList"){
            for(const node of mutation.addedNodes){
                DynamicModifier.runUpdates(mutation.target);
            }
        }
    }
})
mutationHandler.observe(document.body,{
    attributes:true,
    subtree:true,
    childList:true,
})