class SavingAccount extends Account{
    constructor(number, _interestVariable=20){
        super(number);
        this._interestVariable=_interestVariable;
    }
    getInterestVariable(){
        return this._interestVariable;
    }
    setInterestVariable(_interestVariable){
        this._interestVariable=_interestVariable;
    }
    addInterest(){
        super.deposit(this._interestVariable);
        return this._balance;
    }
    CalculateAmount(){
        return this._balance*this._interestVariable/100;
    }

    toString(){
        return "Account " + this._number + ": balance " + 
        this.CalculateAmount(); 
    }
    
}

let r=new SavingAccount(30,40);
console.log(r.addInterest());
console.log(r.CalculateAmount());
