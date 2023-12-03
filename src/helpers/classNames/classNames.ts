export function classNames(defaultClass: string, additionalClasses: string[] = []) {
  return [
    defaultClass,
    ...additionalClasses
  ].join(" ");
}