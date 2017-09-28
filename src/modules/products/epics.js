export default action$ =>
  action$.ofType('TOTO')
    .delay(1000) // Asynchronously wait 1000ms then continue
    .mapTo({ type: 'TITI' });
