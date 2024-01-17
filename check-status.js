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
