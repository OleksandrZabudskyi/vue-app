import { convertToString } from "@/filters/convertToString";
import { intersection } from "@/directives/intersectionObserver";

export function install(Vue) {
  Vue.filter("convertToString", convertToString);
  Vue.directive("isInViewPort", intersection);
}
