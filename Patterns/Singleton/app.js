const Singleton = (() => {
    let instance;
    
    const createInstance = () => {
        const object = new Object({name: 'John'});
        return object
    }

    return {
        getInstance: () => {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})()

const instanceA = Singleton.getInstance()
const instanceB = Singleton.getInstance()

// alway true as its just the single instance thats created
console.log(instanceA === instanceB)