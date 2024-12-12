
// Login Page
let balance =1000;
const correctAccountNumber = '123456'; // Example account number
const correctPin = '1234'; // Example PIN

function login() {
  // Get user inputs
  var accountNumber = document.querySelector("#loginAccNo").value;
  var pin = document.querySelector("#loginPin").value;

  // Check if account number and PIN are correct
  if (accountNumber === correctAccountNumber && pin === correctPin) 
    {
   
     document.getElementById("loginPage").style.display = "none";
     document.getElementById("options").style.display = "block"; 
     return;
    } else 
        { 
          document.getElementById("loginError").innerHTML = "Incorrect Account Number or PIN. Please try again.";
        }
}

//logout button
function logout() 
{
  document.getElementById("options").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("loginAccNo").value='';
  document.getElementById("loginPin").value = '';
  document.getElementById("loginError").innerText = '';
}

function checkBalance()
{
  alert('Your current balance is $' + balance);
}

function deposit()
{
  
  document.getElementById("options").style.display = "none";
  document.getElementById("depositPortal").style.display = "block";
}

function depositFun()
{
  //he parseFloat() function is used in the example to ensure that the input value from the user (which is a string) is converted into a numerical value, specifically a floating-point number.
    const depositAmount = parseFloat(document.getElementById("depositAmt").value);
 
  if (isNaN(depositAmount) || depositAmount <= 0) 
    {
    alert('Please enter a valid amount.');
    } else 
      {
        balance += depositAmount;
        document.getElementById("balanceAmount").innerText = balance;
       document.getElementById("depositAmt").value;
         depositCancel();
         document.getElementById("depositAmt").value = '';
        alert('Deposit Successful!');
      
      }
}

function depositCancel()
{
  document.getElementById("depositPortal").style.display = "none";
  document.getElementById("options").style.display = "block";
  
}

function withdraw()
{
  
  document.getElementById("options").style.display = "none";
  document.getElementById("withdrawPortal").style.display = "block";
}

function withdrawFun()
{
  const withdrawAmount = parseFloat(document.getElementById("withdrawAmt").value);
  if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
    alert('Please enter a valid amount.');
  } else if (withdrawAmount >= balance) {
    alert('Insufficient balance!');
  } else {
    balance -= withdrawAmount;
    document.getElementById("balanceAmount").innerText = balance;
     document.getElementById("withdrawAmt").value;
     withdrawCancel();
     document.getElementById("depositAmt").value = '';
    alert('Withdrawal Successful!');
  }
}

function withdrawCancel()
{
  document.getElementById("withdrawPortal").style.display = "none";
  document.getElementById("options").style.display = "block";
  
}



    
        
    









