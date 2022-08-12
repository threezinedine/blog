export default function() {
    const routes = ["Home", "About", "Blog"]

    let mode = 2 

    return {
        getModeName(index) {
            return routes[index % routes.length]
        },
        getLength() {
            return routes.length
        },
        setMode(index) {
            mode = index % routes.length
        },
        isActiveByName(modeName) {
            for (let i=0; i<routes.length; i++) {
                if (routes[i] === modeName) {
                    if (mode === i) {
                        return true 
                    } 
                }
            }
            return false
        },
        isActive(index) {
            return mode === index
        }
    }
}
