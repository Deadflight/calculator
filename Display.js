class Display{
  constructor($displayPreviousValue,$displayCurrentValue){
    this.displayPreviousValue = $displayPreviousValue;
    this.displayCurrentValue = $displayCurrentValue;
    this.calculator = new Calculator();
    this.operatorType = undefined;
    this.currentValue = '';
    this.previousValue = '';
    this.operator = {
      add: '+',
      subtract: '-',
      multiply: 'x',
      divide: '/'
    }
  }

  addNumber(number){
    if(number === '.' &&  this.currentValue.includes('.')) return;
    this.currentValue = this.currentValue.toString() + number.toString();
    this.printValues();
  }

  compute(type){
    this.operatorType !== 'equal' && this.calculate();
    this.operatorType = type;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = '';
    this.printValues();
  }

  delete(){
    this.currentValue = this.currentValue.toString().slice(0,-1);
    this.printValues();
  }

  deleteAll(){
    this.currentValue = '';
    this.previousValue = '';
    this.operatorType = undefined;
    this.printValues();
  }

  printValues(){
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${this.operator[this.operatorType] || ''}`;
  }

  calculate(){
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if( isNaN(previousValue) || isNaN(currentValue) ) return

    this.currentValue = this.calculator[this.operatorType](previousValue,currentValue)
  }
}