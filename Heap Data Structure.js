function MinHeap(){
   var heapArray = [];
   var lastIndex = 0;

   return {
     getMin : function getMin(){
       return  heapArray[0];
     },
     add : function add(element){
       heapArray[lastIndex] = element;
       lastIndex++;
     },
     length : function length(){
        return heapArray.length;
     },
     print : function print(){
        console.log(heapArray);
     }

   }
}
