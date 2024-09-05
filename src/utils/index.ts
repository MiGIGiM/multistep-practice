type WithName<T> = T & { name: string };

export const filterArrayByString = <T extends { name: string }>(str: string, arr: WithName<T>[]): WithName<T> | undefined => {
    return arr.find((item) => item.name.toLowerCase() === str.toLowerCase());
};