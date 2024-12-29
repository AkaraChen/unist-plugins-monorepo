import type { PluggableList, Plugin } from 'unified'

export function createComposer<
    T extends Record<
        string,
        {
            plugin: Plugin<any, any>
            options?: any
        }
    >,
>(map: T) {
    return function compose(fn: (map: T) => PluggableList) {
        return fn(map)
    }
}
