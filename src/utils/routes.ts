import {ApiRoutes, Routes} from "routes/routes";

export const getRoutePathByName = (name: string, params?: Object) => {
    const path = Routes.find(route => route.name === name)?.path
    if (!path) {
        throw new Error(`Route ${name} not found`)
    }
    if (params) {
        return replaceParams(path, params)
    }
    return path
}

export const getApiRoutePathByName = (name: string, params?: Object) => {
    const path = ApiRoutes.find(route => route.name === name)?.path
    if (!path) {
        throw new Error(`Route ${name} not found`)
    }
    if (params) {
        return replaceParams(path, params)
    }
    return path
}

export const comparePath = (routePath: string, currentPath: string): boolean => {
    const routePathArray = routePath.split('/')
    const currentPathArray = currentPath.split('/')

    if (routePathArray.length !== currentPathArray.length) return false

    for (let i = 0; i < routePathArray.length; i++) {
        if (routePathArray[i] !== currentPathArray[i] && !routePathArray[i].startsWith(':')) {
            return false
        }
    }

    return true
}

const replaceParams = (path: string, params: any) => {
    let newPath = path
    Object.keys(params).forEach(key => {
        newPath = newPath.replace(`:${key}`, params[key])
    })
    return newPath
}
