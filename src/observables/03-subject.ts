import { Observable, Observer, Subject, Subscriber } from "rxjs";

const observable: Observer<any> = {
  next: (value): void => console.log("next", value),
  error: (err) => console.warn("err", err),
  complete: () => console.info("complete"),
};

const interval$ = new Observable<number>((subs) => {
  const interId = setInterval(() => {
    subs.next(Math.random());
  }, 1000);
  return () => {
    clearInterval(interId);
    console.log("eliminado interval");
  };
});
//  al agregar el subject y suscribirme a el logro que todos los valores suscrito sean iguales
//  1- casteo multiple
//  2- Tambien es un Observer
//  3- Next, error y complete
const subject$ = new Subject();
const intervalSubscription = interval$.subscribe(subject$);

const sub1 = subject$.subscribe((ran1) => console.log(ran1, "ran1"));
const sub2 = subject$.subscribe((ran2) => console.log(ran2, "ran2"));
// const sub1 = interval$.subscribe((ran1) => console.log(ran1, "ran1"));
// const sub2 = interval$.subscribe((ran2) => console.log(ran2, "ran2"));
//
//
setTimeout(() => {
  subject$.next(10);

  subject$.complete();
  intervalSubscription.unsubscribe();
}, 3500);

//Cuando la data es producida dentro del observable en si mismo es considerado
//"COLD Observable".
//Cuando es emitida fuera del observable es llamada Hot Observable!!!!!
