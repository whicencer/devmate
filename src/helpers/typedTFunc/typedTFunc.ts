import {TFunction} from "i18next";

export function typedTFunc<T>(label: T, t: TFunction<string>) {
  return t(label as string);
}