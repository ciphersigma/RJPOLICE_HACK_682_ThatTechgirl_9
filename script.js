// Function to submit defreezing request
function submitDefreezingRequest() {
    const complaintId = document.getElementById('complaintId').value.trim();

    // Perform validation and submit the request to the server
    // You can add your logic here to send the request to the server
}

// Function to check status
function checkStatus() {
    const checkComplaintId = document.getElementById('checkComplaintId').value.trim();

    // Validate the complaintId
    if (!checkComplaintId) {
        alert('Invalid Complaint ID. Please try again.');
        return;
    }

    // Send a request to the server to check the status
    fetch(`/status/${checkComplaintId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                document.getElementById('statusDisplay').textContent = `Complaint Status: ${data.status}`;
            } else {
                document.getElementById('statusDisplay').textContent = `Error checking status: ${data.message || 'Unknown error'}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('statusDisplay').textContent = `An unexpected error occurred. Please try again. (${error.message || 'Unknown error'})`;
        });
}

// Function to track funds
function trackFunds() {
    const complaintId = document.getElementById('complaintId').value.trim();

    // Validate the complaintId
    if (!complaintId) {
        alert('Invalid Complaint ID. Please try again.');
        return;
    }

    // Send a request to the server to track funds
    // You can add your logic here to handle tracking funds
}

// Updated submitForm function
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    const form = document.getElementById('reportForm');
    const formData = new FormData(form);
  
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Show a browser notification
                showNotification(formData.get('userName'), data.complaintId);

                // Create a custom modal (popup) for the thank-you message
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close" onclick="closeModal()">&times;</span>
                        <p>Thank you, ${formData.get('userName')}, for your report!</p>
                        <p>Complaint ID: ${data.complaintId}</p>
                    </div>
                `;
                
                // Append the modal to the body
                document.body.appendChild(modal);

                // Reset the form after submission
                form.reset();
            } else {
                alert(`Error submitting report: ${data.error}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
}

// Function to close the modal
function closeModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.remove();
    }
}

// Function to check report status
function checkReportStatus() {
    const complaintIdInput = document.getElementById('complaintId');
    const statusResult = document.getElementById('statusResult');
  
    const complaintId = complaintIdInput.value.trim();
    if (!complaintId) {
        alert('Invalid Complaint ID. Please try again.');
        return;
    }
  
    fetch(`/status/${complaintId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.result === 'success') {
                statusResult.textContent = `Complaint Status: ${data.status}`;
            } else {
                statusResult.textContent = `Error checking status: ${data.message || 'Unknown error'}`;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            statusResult.textContent = `An unexpected error occurred. Please try again. (${error.message || 'Unknown error'})`;
        });
}

// Function to go back
function goBack() {
    window.history.back();
}

function reportCrime() {
    alert('Reporting a crime...');
}

function trackComplaints() {
    alert('Tracking complaints...');
}

function goToForum() {
    alert('Going to the community forum...');
}

function trackOrSubmitFunds() {
    alert('Tracking or submitting funds...');
}

function goToFaq() {
    alert('Visiting FAQ...');
}

// Customize and add more functions as needed

function goBack() {
    window.history.back();
  }
  // Your existing functions...

// Function to show browser notification
function showNotification(userName, complaintId) {
    if (Notification.permission === "granted") {
        const notification = new Notification('Thank you for your report!', {
            body: `Thank you, ${userName}, for your report!\nYour Complaint ID: ${complaintId}`,
        });

        // Close the notification after a few seconds
        setTimeout(() => {
            notification.close();
        }, 5000);
    } else if (Notification.permission !== "denied") {
        // Request permission from the user
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                showNotification(userName, complaintId);
            }
        });
    }
}

// Updated submitForm function
function submitForm(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    const form = document.getElementById('reportForm');
    const formData = new FormData(form);
  
    fetch(form.action, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => {
            if (data.result === 'success') {
                // Show a browser notification
                showNotification(formData.get('userName'), data.complaintId);

                // Create a custom modal (popup) for the thank-you message
                const modal = document.createElement('div');
                modal.classList.add('modal');
                modal.innerHTML = `
                    <div class="modal-content">
                        <span class="close" onclick="closeModal()">&times;</span>
                        <p>Thank you, ${formData.get('userName')}, for your report!</p>
                        <p>Complaint ID: ${data.complaintId}</p>
                    </div>
                `;
                
                // Append the modal to the body
                document.body.appendChild(modal);

                // Reset the form after submission
                form.reset();
            } else {
                alert(`Error submitting report: ${data.error}`);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An unexpected error occurred. Please try again.');
        });
}

// Your existing functions...

// Existing functions...

// Function to check progress
function checkProgress() {
    const complaintId = document.getElementById('complaintId').value;

    // Simulate fetching progress stages from the server
    const stages = ['NOC Submitted', 'NOC Approved', 'Request for Refund Initiated', 'Request Got Accepted', 'Refund Initiated'];

    updateProgressStages(stages);
}

function updateProgressStages(stages) {
    const progressStages = document.getElementById('progressStages');
    progressStages.innerHTML = '';

    stages.forEach((stage, index) => {
        const stageElement = document.createElement('div');
        stageElement.classList.add('progress-stage', 'animated', 'fadeIn', `delay-${index}s`);
        stageElement.innerHTML = `<h3>${stage}</h3>`;
        progressStages.appendChild(stageElement);
    });
}

// Existing functions...
function checkProgress() {
    const complaintId = document.getElementById('complaintId').value;

    // Simulate fetching progress stages from the server
    const stages = ['Complaint Submission', 'Complaint Verification', 'Complaint Approval', 'Court Case ', 'Work in Progress','Issue Resolved'];

    updateProgressStages(stages);
}

function updateProgressStages(stages) {
    const progressStages = document.getElementById('progressStages');
    progressStages.innerHTML = '';

    stages.forEach((stage, index) => {
        const stageElement = document.createElement('div');
        stageElement.classList.add('progress-stage', 'animated', 'fadeIn', `delay-${index}s`);
        stageElement.innerHTML = `<h3>${stage}</h3>`;
        progressStages.appendChild(stageElement);
    });
}

