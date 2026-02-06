const palindromeBtn = document.getElementById("palindromeBtn");

palindromeBtn.addEventListener("click", (event) => {
  const input = document.getElementById("palindromeInput").value;
  const cleaned = input.toLowerCase();
  const reversed = cleaned.split("").reverse().join("");
  const result = document.getElementById("palindromeResult");

  if (cleaned === reversed) {
    result.style.color = "green";
    result.textContent = input + " is a palindrome!";
    alert(input + " is a palindrome!");
  } else {
    result.style.color = "red";
    result.textContent = input + " is NOT a palindrome.";
    alert(input + " is NOT a palindrome.");
  }
});