// // app.js
// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     var options = {
//       key: "rzp_test_boXpT1w7FW6xiq",
//       key_secret: "NgAgqg8Jtn64Lgm5jhDwyL4p",
//       amount: amount * 100,
//       currency: "INR",
//       name: "Payment Gateway",
//       description: "for testing",
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//       },
//       prefill: {
//         name: "Synergy Universal",
//         email: "gadilakarthikreddy2@gmail.com",
//         contact: mobile,
//       },
//       notes: {
//         address: "Madhapur"
//       },
//       theme: {
//         color: "#3399cc"
//       }
//     };
//     var pay = new window.Razorpay(options); 
//     pay.open();
//   }

//   return (
//     <div className="App">
//       <div className='form-container'>
//         <h2>Payment Gateway</h2>
//         <form target="_blank" action="https://formsubmit.co/karthikreddygadila6@gmail.com" onSubmit={handleSubmit} method="POST" >
//           <div className='input-group'>
//             <h3>Name</h3>
//             <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Email</h3>
//             <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Mobile</h3>
//             <input type='text' name='number' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Amount</h3>
//             <input type='text' name='number' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>

//           <button type="submit">Pay</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send form data via AJAX
//       const response = await fetch("https://formsubmit.co/ajax/karthikreddygadila6@gmail.com", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name: name,
//           email: email,
//           mobile: mobile,
//           amount: amount
//         })
//       });
      
//       if (!response.ok) {
//         throw new Error('Failed to send form data');
//       }

//       // Integrate Razorpay payment functionality after successful form submission
//       const options = {
//         key: "rzp_test_boXpT1w7FW6xiq",
//         amount: amount * 100,
//         currency: "INR",
//         name: "Payment Gateway",
//         description: "for testing",
//         prefill: {
//           name: name,
//           email: email,
//           contact: mobile
//         },
//         notes: {
//           address: "Madhapur"
//         },
//         theme: {
//           color: "#3399cc"
//         }
//       };
//       const pay = new window.Razorpay(options);
//       pay.open();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className='form-container'>

//         <h2>Payment Gateway</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='input-group'>
//             <h3>Name</h3>
            
//             <input type='text' name='Amount Paid' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Email</h3>
//             <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Mobile</h3>
//             <input type='text' name='number' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Amount Paid</h3>
//             <input type='text' name='number' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>

//           <button type="submit">Pay</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Integrate Razorpay payment functionality
//       const options = {
//         key: "rzp_test_boXpT1w7FW6xiq",
//         amount: amount * 100,
//         currency: "INR",
//         name: "Payment Gateway",
//         description: "for testing",
//         prefill: {
//           name: name,
//           email: email,
//           contact: mobile
//         },
//         notes: {
//           address: "Madhapur"
//         },
//         theme: {
//           color: "#3399cc"
//         },
//         handler: function (response) {
//           // Handle payment success
//           console.log("Payment successful:", response);
//           // Display payment confirmation message
//           alert("Your payment is confirmed. Thank you!");
//         }
//       };
//       const pay = new window.Razorpay(options);
//       pay.open();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className='form-container'>

//         <h2>Payment Gateway</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='input-group'>
//             <h3>Name</h3>
//             <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Email</h3>
//             <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Mobile</h3>
//             <input type='text' name='number' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Amount Paid</h3>
//             <input type='text' name='amount' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>

//           <button type="submit">Pay</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

// import './App.css';
// import React, { useState } from 'react';

// function App() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Send payment confirmation via AJAX
//       const formDataResponse = await fetch("https://formsubmit.co/ajax/karthikreddygadila6@gmail.com", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           confirmation: `Dear ${name},\n\nThank you for choosing our website😊. Your payment is successful.\n\nBest Regards,\nSynergy Universal`
//         })
//       });

//       if (!formDataResponse.ok) {
//         throw new Error('Failed to send confirmation');
//       }

//       // Integrate Razorpay payment functionality after successful form submission
//       const options = {
//         key: "rzp_test_boXpT1w7FW6xiq",
//         amount: amount * 100,
//         currency: "INR",
//         name: "Payment Gateway",
//         description: "for testing",
//         prefill: {
//           name: name,
//           email: email,
//           contact: mobile
//         },
//         notes: {
//           address: "Madhapur"
//         },
//         theme: {
//           color: "#3399cc"
//         },
//         handler: function (response) {
//           // Handle payment success
//           console.log("Payment successful:", response);
//           // Display payment confirmation message
//           alert("Your payment is confirmed. Thank you!");
//         }
//       };
//       const pay = new window.Razorpay(options);
//       pay.open();
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="App">
//       <div className='form-container'>

//         <h2>Payment Gateway</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='input-group'>
//             <h3>Name</h3>
//             <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Email</h3>
//             <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Mobile</h3>
//             <input type='text' name='number' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
//           </div>

//           <div className='input-group'>
//             <h3>Amount Paid</h3>
//             <input type='text' name='amount' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
//           </div>

//           <button type="submit">Pay</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;

import './App.css';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send payment confirmation via AJAX
      const formDataResponse = await fetch("https://formsubmit.co/ajax/karthikreddygadila6@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          confirmation: `Dear ${name},\n\nThank you for choosing ekart. Your payment is successful.\n\nBest Regards,\nCompany Name`
        })
      });

      if (!formDataResponse.ok) {
        throw new Error('Failed to send confirmation');
      }

      // Integrate Razorpay payment functionality after successful form submission
      const options = {
        key: "rzp_test_boXpT1w7FW6xiq",
        amount: amount * 100,
        currency: "INR",
        name: "Payment Gateway",
        description: "for testing",
        prefill: {
          name: name,
          email: email,
          contact: mobile
        },
        notes: {
          address: "Madhapur"
        },
        theme: {
          color: "#3399cc"
        },
        handler: function (response) {
          // Handle payment success
          console.log("Payment successful:", response);
          // Send confirmation email for successful payment
          sendConfirmationEmail(true);
          // Display payment confirmation message
          alert("Your payment is confirmed. Thank you!");
        },
        "modal.ondismiss": function() {
          // Handle payment failure
          console.log("Payment failed");
          // Send failure email
          sendConfirmationEmail(false);
          // Display payment failure message
          alert("Payment failed. Please try again.");
        }
      };
      const pay = new window.Razorpay(options);
      pay.open();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const sendConfirmationEmail = async (paymentStatus) => {
    try {
      const confirmationEmailResponse = await fetch("https://api.example.com/sendConfirmationEmail", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          recipient1: email,
          message: paymentStatus ? `Dear ${name},\n\nThank you for choosing our site😊. Your payment is successful.\n\nBest Regards,\nCompany Name` : `Dear ${name},\n\nSorry to say this. Your payment was failed.\n\nBest Regards,\nCompany Name`
        })
      });

      if (!confirmationEmailResponse.ok) {
        throw new Error('Failed to send confirmation email');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <div className='form-container'>

        <h2>Payment Gateway</h2>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <h3>Name</h3>
            <input type='text' name='name' placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Email</h3>
            <input type='email' name='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Mobile</h3>
            <input type='text' name='number' placeholder='Enter Number' value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>

          <div className='input-group'>
            <h3>Amount Paid</h3>
            <input type='text' name='amount' placeholder='Enter Amount' value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <button type="submit">Pay</button>
        </form>
      </div>
    </div>
  );
}

export default App;

