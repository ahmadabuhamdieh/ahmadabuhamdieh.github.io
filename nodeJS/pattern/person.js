class Person
{
    constructor(firstname,lastname='AbuHamdieh')
    {
        this.firstname=firstname;
        this.lastname=lastname;
    }

    getName()
    {
        return this.firstname+' '+this.lastname;
    }
}

//module.exports=new Person('Ahmad');  not good
module.exports=Person;