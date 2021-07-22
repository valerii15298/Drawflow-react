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
