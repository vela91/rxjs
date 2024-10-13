import { Observable, Observer, Subscriber } from "rxjs";

const observable: Observer<any> = {
  next: (value): void => console.log("next", value),
  error: (err) => console.warn("err", err),
  complete: () => console.info("complete"),
};

const interval$ = new Observable<number>((suscribe) => {
  let numb = 0;

  const interval = setInterval(() => {
    console.log(numb);
    numb++;
    suscribe.next(numb);
  }, 1000);

  setTimeout(() => {
    suscribe.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
  };
});

const sub1 = interval$.subscribe(observable);
const sub2 = interval$.subscribe(observable);
const sub3 = interval$.subscribe(observable);

// el methodo add se encarga de encadenar las subscripciones para evitar hacer unsubscribe de todas
sub1.add(sub2);
sub1.add(sub3);

setTimeout(() => {
  sub1.unsubscribe();
  sub2.unsubscribe();
  sub3.unsubscribe();
}, 3000);
