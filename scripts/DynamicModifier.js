class DynamicModifier{
    static modifiers = [];
    /**
     * Creates a new dynamically executed element modifier
     * @param {(e:Element) => Boolean} modify Returns a boolean given an element on whether to perform the content update
     * @param {(e:Element) => void} action Action to execute on an element
     */
    constructor(modify, action){
        self.modify = modify;
        self.action = action;

        DynamicModifier.modifiers.push(self);
    } 
    /**
     * Runs all dynamic modifier updates on an element
     * @param {Element} e Element to update 
     */
    static runUpdates(e){
        for(mod of DynamicModifier.modifiers){
            if(mod.filter(e)) mod.action(e);
        }
    }
}