const CronJob = require("node-cron");


class Stack{
    constructor(){
        this.count = 0;
        this.items = [];
    }

    push(element){
        this.items[this.count] = element;
        this.count++;
    }

    size(){
        return this.count;
    }

    isEmpty(){
        return this.count === 0;
    }

    pop(){
        if(this.isEmpty()){

            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1];
    }

    clear(){
        this.items = {};
        this.count = 0;
    }



}



    CronJob.schedule('*/15 * * * *', () =>{
    
        const stackMinuto58 = new Stack();
          
        stackMinuto58.push(11520);
        stackMinuto58.push(11521);
        stackMinuto58.push(11522);
        stackMinuto58.push(11523);
    
        stackMinuto58.pop();
    


        console.log(stackMinuto58.peek());
        console.log(stackMinuto58.size());
    
    
       
    });










