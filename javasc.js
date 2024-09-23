document.getElementById('myForm').addEventListener('submit', async (e) => {
   e.preventDefault(); // Prevent default form submission

   // Get values from the form fields by ID
   const name = document.getElementById('name1').value.trim();
   const subject = document.getElementById('subject1').value.trim();
   const message = document.querySelector('.formfield-textarea').value.trim();

   if (name && subject && message) {
       const response = await fetch('https://script.google.com/macros/s/AKfycbz9DNuiGUmM3L_RZS5kJ88VlUD03pHPv68pDZeOvSll9pjuQGnIrcLmtyAKHbcVgvwCng/exec', {
           method: 'POST',
           headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
           body: new URLSearchParams({ name, subject, message })
       });

       const result = await response.json();
       alert(result.status === 'success' ? "Your message has been sent!" : "There was an error.");

       // Clear the form fields
       document.getElementById('myForm').reset();
   } else {
       alert("All fields are required.");
   }
});
