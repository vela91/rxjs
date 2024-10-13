import { of } from "rxjs";

const obs$ = of(11, 2, 3, 4, 5, 6, 7, 8, 8, { a: 1, b: "algo" }, true);

console.log("inicio");
obs$.subscribe(
  (next) => console.log(next),
  null,
  () => console.log("complete"),
);
console.log("fin");
