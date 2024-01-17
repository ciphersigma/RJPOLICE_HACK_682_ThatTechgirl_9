document.addEventListener('DOMContentLoaded', function () {
    const faqData = [
        {
            question: 'What is Cyber Guardian?',
            answer: 'Cyber Guardian is a comprehensive cybersecurity platform that aims to protect individuals and businesses from online threats. We offer reporting services, educational resources, and tools for tracking and resolving cyber-related issues.',
        },
        {
            question: 'How do I report a cybercrime?',
            answer: 'To report a cybercrime, visit our "Report an Issue" page and fill out the complaint form. Provide detailed information about the incident, and our dedicated team will investigate and take appropriate actions to address the issue.',
        },
        {
            question: 'Is my information secure?',
            answer: 'Yes, ensuring the security and confidentiality of your information is our top priority. We implement robust encryption measures and follow industry best practices to protect the data submitted through our platform.',
        },
        {
            question: 'What happens after I report an issue?',
            answer: 'After you submit a report, our team conducts a thorough review of the details provided. We may contact you for additional information if needed. Subsequently, we take necessary actions to mitigate the issue and prevent further harm.',
        },
        {
            question: 'How can I track the status of my complaint?',
            answer: 'You can track the status of your complaint using our "Complaint Tracking" feature. Simply enter your unique complaint ID, and the system will provide real-time updates on the progress of your case, including stages like NOC submission, request approval, in-process, and refund initiation.',
        },
        {
            question: 'Are there educational resources available?',
            answer: 'Yes, Cyber Guardian offers a variety of educational resources, including articles, guides, and tutorials, to help users enhance their cybersecurity awareness. Check out our "Resources" section for valuable insights and tips on staying safe online.',
        },
        {
            question: 'Can I contact customer support?',
            answer: 'Certainly! For any inquiries or assistance, you can reach out to our customer support team via the "Contact Us" page. We are here to help you with any concerns or questions you may have regarding our services.',
        },
        {
            question: 'How do I recover frozen funds?',
            answer: 'To recover frozen funds, use our "Fund Defreezing" feature. Enter your complaint ID and follow the steps to submit the necessary documents. Our system will guide you through the process, providing updates on each stage until the funds are successfully defrozen.',
        },
        {
            question: 'What preventive measures can I take against cyber fraud?',
            answer: 'To prevent cyber fraud, regularly update your passwords, use reliable security software, be cautious of phishing emails, and educate yourself about common online scams. Check our "Cyber Tips" section for more detailed guidance on staying secure online.',
        },
        {
            question: 'How does the AI-powered legal decision system work?',
            answer: 'Our AI-powered legal decision system analyzes the details of reported cyber fraud cases and suggests the most appropriate legal steps for fund recovery. It leverages advanced algorithms to provide tailored recommendations, ensuring efficient and effective resolution.',
        },
        // Add more FAQ items as needed
    ];

    const faqList = document.getElementById('faq-list');

    faqData.forEach(item => {
        const faqItem = document.createElement('div');
        faqItem.classList.add('faq-item');

        const question = document.createElement('div');
        question.classList.add('question');
        question.textContent = item.question;

        const answer = document.createElement('div');
        answer.classList.add('answer');
        answer.textContent = item.answer;
        answer.style.display = 'none'; // Initially hide the answer

        faqItem.appendChild(question);
        faqItem.appendChild(answer);

        question.addEventListener('click', function () {
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
        });

        faqList.appendChild(faqItem);
    });
});

function goBack() {
    window.history.back();
}
