//Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";
  
    if (length < 8) {
      console.error("Password length must be at least 8 characters.");
      return null;
    }
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      password += allChars[randomIndex];
    }
  
    return password;
  }
  
  // Example usage:
  const passwordLength = 12; // Change this to set the desired length of the password
  const randomPassword = generateRandomPassword(passwordLength);
  
  if (randomPassword) {
    console.log("Generated Password:", randomPassword);
  }
  