import Node from "./redux/Node";

export const memoize = (): MethodDecorator => {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    if ("value" in descriptor) {
      // const func = descriptor.value;
      // descriptor.value = lodash.memoize(func);
    } else if ("get" in descriptor) {
      const origFunc = descriptor.get;
      // console.log(propertyKey);
      descriptor.get = function (this: Node) {
        if (this.cache[propertyKey]) {
          return this.cache[propertyKey];
        }
        const rez = origFunc.bind(this)();
        this.cache[propertyKey] = rez;
        return rez;
      };
    }
    return descriptor;
  };
};

export function syncTimer() {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      console.time(propertyKey);
      const result = originalMethod.apply(this, args);
      console.timeEnd(propertyKey);
      return result;
    };
    return descriptor;
  };
}
