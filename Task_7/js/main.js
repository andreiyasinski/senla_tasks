let createHolder = (arg) => {
  let myObj = {
    value: arg,
    getValue: function() {
      console.log(this.value);
    },
    setValue: function(newValue) {
      this.value = newValue
    }
  }
  return myObj;
}

var obj = createHolder(5)
obj.getValue() // returns 5
obj.setValue(2)
obj.getValue() // returns 2
