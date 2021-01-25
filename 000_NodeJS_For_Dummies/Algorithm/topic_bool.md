# Bool 类型算法题

## Boo who

Check if a value is classified as a boolean primitive. Return true or false.
Boolean primitives are true and false.

```JS
function booWho(bool) {
  if( bool == true && typeof bool != 'number'){
    bool = true;
  }else if(bool == false){
    bool = true;
  }else{
    bool = false;
  }
  return bool;
}

booWho(null);

```