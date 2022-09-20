describe("deposit",function(){
    it("returns the balance after depositing",()=>{
        assert.equal(account.deposit(100),100); 
    });
    it("withdraw from the amount",()=>{
        assert.equal(account.withdraw(100),0);
    });
});