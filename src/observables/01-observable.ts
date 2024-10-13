import { Observable, Observer, Subscriber } from "rxjs";

const obs$ = new Observable<string>((subs: Subscriber<string>): void => {
  subs.next("hola");
  subs.next("mundo");
  subs.next("hola");
  subs.next("mundo");

  // emitir un error
  const a = undefined;
  a.res = "paco";

  subs.complete();
});
const observable: Observer<any> = {
  next: (value): void => console.log("next", value),
  error: (err) => console.error("err", err),
  complete: () => console.info("complete"),
};

obs$.subscribe(observable);
