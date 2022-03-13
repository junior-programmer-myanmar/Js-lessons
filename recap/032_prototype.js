function Person(name,age){
        this.getName = name;
        this.getAge = 10;
}

Person.prototype.getName = function(){
    return this.getName;
};

Person.prototype.getAge = function(){
    return this.getAge;
}

Person.prototype.getUserData = function(){
    return this.getName + ":" + this.age
}

