(function () {
    
    // Let's get started!
    console.log("Let's get started!");

    // "this" works differently in different circumstances.
    //  In this class "this" works in a way you might now expect.
    class employee {
        userId: string;

        displayUserId() {
            setTimeout(function () {
                console.log(`"this.UserId" is: ${this.userId}`);
            }, 1000);
        }
    }

    // Creating an object of type employee.
    var myEmployee = new employee();
    myEmployee.userId = 'abc123';

    // Calling the displayUserId method.  
    // Notice "this.userId" returns "undefined".
    myEmployee.displayUserId();
    

})();