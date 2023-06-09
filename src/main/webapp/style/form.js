document.getElementById('disabled').addEventListener('change', function() {
  var verificationSection = document.getElementById('verification');
  if (this.checked) {
    verificationSection.style.display = 'block';
  } else {
    verificationSection.style.display = 'none';
  }
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var dob = document.getElementById('dob').value;
  var gender = document.getElementById('gender').value;
  var address = document.getElementById('address').value;
  var phone = document.getElementById('phone').value;
  var disabled = document.getElementById('disabled').checked;
  var verificationDoc = document.getElementById('verificationDoc').value;
  
  // Create PDF content
  var pdfContent = `
    <h2>Signup Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Password:</strong> ${password}</p>
    <p><strong>Date of Birth:</strong> ${dob}</p>
    <p><strong>Gender:</strong> ${gender}</p>
    <p><strong>Address:</strong> ${address}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Disabled:</strong> ${disabled ? 'Yes' : 'No'}</p>
  `;
  
  if (disabled && verificationDoc) {
    pdfContent += `<p><strong>Disability Verification Document:</strong> ${verificationDoc}</p>`;
  }
  
  // Generate PDF
  generatePDF(pdfContent);
});

function generatePDF(content) {
  var printWindow = window.open('', '_blank');
  printWindow.document.open();
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Signup Details - PDF</title>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
      </style>
    </head>
    <body>
      ${content}
      <script type="text/javascript">
        window.onload = function() {
          window.print();
          window.onafterprint = function() {
            window.close();
          }
        }
      </script>
    </body>
    </html>
  `);
  printWindow.document.close();
}
