function mypalindrome() {
    let str = document.getElementById("one").value;
    let demo = document.getElementById("demo");
    let j = str.length - 1;
    if(str=="")
    {
        alert("please enter a string")
        return
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[j]) {
            demo.innerHTML = "Not a palindrome";
            return; // Exit the function early if it's not a palindrome
        }
        j--;
    }
    
    demo.innerHTML = "PALINDROME";
}