const numOrString = prompt('input number or string')
switch (true) {
  case numOrString === null:
    console.log('ви скасували');
    break;
  case numOrString.trim() === '' :
    console.log('Empty String');
    break;
  case isNaN( +numOrString):
    console.log(' number is Ba_NaN')
    break;
  default:
    console.log('OK!')
}