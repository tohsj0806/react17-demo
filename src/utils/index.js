export const paramObj = (params) => {
    
    const result = {...params}
    Object.keys(result).forEach(key=>{
        const value = result[key]
        if(isNull(value)){
            delete result[key]
        }
    })
    return result
}

export const isNull = (value) => value === 0 ? false : !value


