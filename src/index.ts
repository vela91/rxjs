//from = array, promise , iterable, observable

import { from } from "rxjs";

const observer = {
  next: (value): void => console.log("next", value),
  error: (err) => console.error("err", err),
  complete: () => console.info("complete"),
};

// const src$ = from([1, 2, 3, 4, 5, 6]);
// src$.subscribe(observer);
//
//
// la linea anterior devuelve cada letra del string
// -----------------------------------------
// const src$ = from("vela");
// src$.subscribe(observer);
// -----------------------------------------

const src$ = from(fetch("https://api.github.com/users/vela91"));

src$.subscribe(async (resp) => {
  const data = await resp.json();
  console.log(data);
});
