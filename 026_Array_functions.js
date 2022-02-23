// Array.isArray(numbers);
// numbers[2] = 100;
// ary.indexOf(19);
// ary.push(300); // add new value to end
// ary.unshift(120) // add to the beginning
// ary.pop(); // poo out at the end
// ary.shift(); // shift out from beginning
// numbers.splice(index, count)
// numbers.reverse();
//numbers.concat(numbers, number2)  // join 2 or more array


// Array.isArray(numbers); START
let ary = [1,2,3,4,5,6,7,8,9,10];

// let bol = Array.isArray(ary)

let bol = Array.isArray(ary)
console.log(bol)
// Array.isArray(numbers); END

// numbers[2] = 100; START
let ary190 = [1,2,3,4,5,6,7,8,9,10];
ary190[8] = 30
console.table(ary)
// numbers[2] = 100; END


// ary.indexOf(19); start
let arry = [2,5,6,1,4,8]

// let ind = arry.indexOf(6)
let ind = arry.indexOf(1) 
console.log(ind);
// ar y.indexOf(19); end

// ary.push(300); // add new value to end  start

let array = [3,2,7,6,4,9]
console.log(array)
array.push(200)

console.log(array)
// ary.push(300); // add new value to end  end


// ary.unshift(120) // add to the beginning start

        let usa = [5,4,3,7];
        console.log(usa)
         usa.unshift(320)
        console.log(usa)
// ary.unshift(120) // add to the beginning end


// ary.pop(); // poo out at the end start
        let popse = [4,7,5,9]
        console.log(popse)
        popse.pop(10)
        console.log(popse);
// ary.pop(); // poo out at the end end


// numbers.splice(index, count) start

    let aa = [56,78,34,56,90]
    console.log(aa)
    let kyb = aa.splice(1,2)
    console.log(kyb)
// numbers.splice(index, count) end



// numbers.reverse(); start
        let ss = [4,6,5,3,7]
        console.log(ss)
        ss.reverse()
        console.log(ss)
// numbers.reverse(); end



//numbers.concat(numbers, number2)  // join 2 or more array start
let ary10 = [4,6,2,8,9,6]

let ary11 = [10,11]
// let combine = ary10.concat(ary11)
let combine = ary10.concat(ary11)
console.log(combine)

//numbers.concat(numbers, number2)  // join 2 or more array end