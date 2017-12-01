/**
 * Stack Data Structure
 */
 /**
  * initialize your data structure here.
  */
 var MinStack = function() {
     this.topPtr =  -1;
     this.stackArray = [];
     this.minArray = [Number.MAX_VALUE];
 	  this.minPtr = -1;
 };

 /**
  * @param {number} x
  * @return {void}
  */
 MinStack.prototype.push = function(x) {
      this.topPtr++;
     this.stackArray[this.topPtr] = x;

 	if(this.minPtr < 0){
 	 this.minPtr++;
 	 this.minArray[this.minPtr] = x;
 	}else{
 	  this.minPtr++;
 	  this.minArray[this.minPtr] = Math.min(this.minArray[this.minPtr-1], x);
 	}
     return;

 };

 /**
  * @return {void}
  */
 MinStack.prototype.pop = function() {
     var poppedValue =  this.stackArray[this.topPtr];
     this.topPtr--;
 	this.minPtr--;
     return;
 };

 /**
  * @return {number}
  */
 MinStack.prototype.top = function() {
     return this.stackArray[this.topPtr];
 };

 /**
  * @return {number}
  */
 MinStack.prototype.getMin = function() {
       return this.minArray[this.minPtr];
 };
