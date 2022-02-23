// functin default value
//function expression
// Immidiately invokable function expression (IIFEs)
//function inside object



// functin default value start

        // function doIt(name = "Mg Mg") {
        //     console.log(name)
        // }

        // doIt()

        function doIt(name = "Kaung Kaung"){
            console.log(name)
        }

        doIt()
// functin default value end


//function expression start 

    // let dd = function () {
    //    console.log('Flower Website start')
    // }

    // dd();

    
    // let dd =  () => {
    //     console.log('Flower Website start')
    //  }
 
    //  dd();

    let dd = () => {
        console.log('Flower Website end')
    }

    dd()
//function expression end



// Immidiately invokable function expression (IIFEs) start 

        // (function () {
        //     console.log('I am IIFE')
        // })();

        (function () {
            console.log('I am JS')
        })();

        
// Immidiately invokable function expression (IIFEs) end





//function inside object start

        let obj = {
            name: 'Yu Yu',
            age: 2.5,
            dd: function () {
                console.log(' I am function inside object ')
            }
        }

        obj.dd();       
//function inside object end