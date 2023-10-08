# Question-1:

Answers: B
Explain:
 - Mistakenly used the incorrect variable name -(greetign). JavaScript will not automatically create a variable for the misspelled (greetign) and it will throw a (ReferenceError) because (greetign) is not defined.So the correct answer is (B).

# Question-2:

Answers: C
Explain:
 - The sum function is take two parameters a and b and return a + b. When you call sum(1, "2"), you are passing a number (1) and a string ("2") as arguments.JavaScript will attempt to perform type coercion and convert the string "2" to a number, but since the conversion is implicit and done using the + operator, it will result in string concatenation rather than numerical addition. So, the result will be the string "12".

# Question-3:

Answers: A
Explain:
 - Initially create food variable an array food containing four food emojis.Create an object info with a property favoriteFood that is set to the first element of the food array, one more emoji".When you log the food array, it remains unchanged,So the output will be old array.

# Question-4:

Answers: B
Explain:
 - The sayHi function is take one parameter name and return `Hi there, ${name}`. When you call sayHi(),you didn't provide any argument for the name parameter.As a result, the name variable inside the sayHi function is undefined.So the output will be (Hi there, undefined).

# Question-5:

Answers: C
Explain:
 - Initially  a variable count to 0 and create an array called nums containing the values [0, 1, 2, 3].Use the forEach method to iterate through each element in the nums array.forEach function (num) => { ... }, num represents the current element being iterated.Inside the callback function, there is an if statement that checks if num is truthy (not equal to 0). If num is truthy, it increments the count variable by 1.After the forEach loop completes, it will have counted the number of truthy values in the nums array. In this case, there are three truthy values.So the correct answer is C