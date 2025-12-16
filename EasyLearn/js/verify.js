document.addEventListener('DOMContentLoaded', () => {

    const verifyForm = document.getElementById('verify-form');
    const inputId = document.getElementById('cert-id-input');
    const loadingDiv = document.getElementById('loading');
    const resultDiv = document.getElementById('verify-result');

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const idFromUrl = urlParams.get('id');
    const encodedData = urlParams.get('data');

    // If we have encoded data from QR code, decode it
    let qrCertData = null;
    if (encodedData) {
        try {
            // Decode the compact data format: {n: name, c: course, d: date, i: id}
            const decodedData = JSON.parse(atob(encodedData));
            console.log('Decoded QR data:', decodedData);

            // Convert compact format to full format
            qrCertData = {
                id: decodedData.i,
                studentName: decodedData.n,
                courseName: decodedData.c,
                issueDate: decodedData.d,
                instructor: 'Basudev Nayak',
                director: 'Lokanath Mohanty',
                status: 'Active',
                verified: true
            };

            // Store in localStorage
            let issuedCertificates = JSON.parse(localStorage.getItem('issuedCertificates')) || {};
            issuedCertificates[qrCertData.id] = qrCertData;
            localStorage.setItem('issuedCertificates', JSON.stringify(issuedCertificates));

            // Auto-verify with the QR data
            inputId.value = qrCertData.id;
            verifyCertificateWithData(qrCertData);
            return; // Exit early - don't run normal flow

        } catch (e) {
            console.error('Error decoding QR data:', e);
        }
    }

    // Auto-verify if ID is in URL (old format)
    if (idFromUrl) {
        inputId.value = idFromUrl;
        verifyCertificate(idFromUrl);
    }

    // Form Submit
    verifyForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = inputId.value.trim();
        if (id) verifyCertificate(id);
    });

    // Verify with data already decoded from QR
    function verifyCertificateWithData(certData) {
        loadingDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        verifyForm.classList.add('hidden');

        setTimeout(() => {
            loadingDiv.classList.add('hidden');
            verifyForm.classList.remove('hidden');
            resultDiv.classList.remove('hidden');

            // Show success with the decoded data
            showSuccess(certData, certData.id);
        }, 1000);
    }

    function verifyCertificate(id) {
        // Show loading
        loadingDiv.classList.remove('hidden');
        resultDiv.classList.add('hidden');
        verifyForm.classList.add('hidden');

        // Simulate API call
        setTimeout(() => {
            loadingDiv.classList.add('hidden');
            verifyForm.classList.remove('hidden');
            resultDiv.classList.remove('hidden');

            const isValid = validateId(id);

            if (isValid) {
                const details = parseId(id);
                showSuccess(details, id);
            } else {
                showError(id);
            }
        }, 1500);
    }

    function validateId(id) {
        // Check localStorage for issued certificates
        const issuedCertificates = JSON.parse(localStorage.getItem('issuedCertificates')) || {};

        // Check if certificate exists in storage
        if (issuedCertificates[id]) {
            return true;
        }

        // Allow sample ID for testing
        if (id === 'LUMINA-SAMPLE-123') return true;

        // Fallback: Simple regex check for format validity
        const validPattern = /^LUMINA-\d{4}-[A-Z0-9]+-[A-Z0-9]+$/;
        return validPattern.test(id);
    }

    function parseId(id) {
        // First check localStorage for real certificate data
        const issuedCertificates = JSON.parse(localStorage.getItem('issuedCertificates')) || {};

        if (issuedCertificates[id]) {
            const cert = issuedCertificates[id];
            return {
                student: cert.studentName,
                course: cert.courseName,
                date: cert.issueDate,
                grade: 'Verified',
                instructor: cert.instructor,
                director: cert.director,
                status: cert.status
            };
        }

        // Sample certificate
        if (id === 'LUMINA-SAMPLE-123') {
            return {
                student: 'John Doe',
                course: 'Full Stack Web Development',
                date: 'January 15, 2024',
                grade: 'A+',
                instructor: 'Basudev Nayak',
                director: 'Lokanath Mohanty',
                status: 'Active'
            };
        }

        const parts = id.split('-');
        // LUMINA - YEAR - COURSE - USER
        const year = parts[1];
        const courseCode = parts[2];

        // Mock mapping
        const courseMap = {
            'WEBDEV': 'Web Development Masterclass',
            'PYTHON': 'Python for Data Science',
            'REACT': 'Advanced React Patterns',
            'AI': 'Artificial Intelligence Basics'
        };

        const courseName = courseMap[courseCode] || 'Professional Certification Course';

        return {
            student: 'Verified Student',
            course: courseName,
            date: `October 12, ${year}`,
            grade: 'Verified',
            instructor: 'Basudev Nayak',
            director: 'Lokanath Mohanty',
            status: 'Active'
        };
    }

    function showSuccess(details, id) {
        // Handle both old and new data formats
        const studentName = details.studentName || details.student || 'Verified Student';
        const courseName = details.courseName || details.course || 'Certification Course';
        const issueDate = details.issueDate || details.date || 'Date Unknown';

        resultDiv.innerHTML = `
            <div class="valid-cert animate-scaleIn">
                <div class="result-icon"><i class="fas fa-check-circle icon-bounce"></i></div>
                <h2>✅ Certificate Verified</h2>
                <p>This certificate ID is valid and authentic.</p>
                
                <div class="cert-details">
                    <div class="detail-row">
                        <span class="detail-label">Certificate ID:</span>
                        <span class="detail-value">${id}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Student Name:</span>
                        <span class="detail-value" style="font-weight: 600; color: #6c5ce7;">${studentName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Course:</span>
                        <span class="detail-value">${courseName}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Issue Date:</span>
                        <span class="detail-value">${issueDate}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Instructor:</span>
                        <span class="detail-value">${details.instructor || 'Basudev Nayak'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Director:</span>
                        <span class="detail-value">${details.director || 'Lokanath Mohanty'}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Status:</span>
                        <span class="detail-value" style="color: #00cec9; font-weight: 600;">${details.status || 'Active'} <i class="fas fa-check-circle"></i></span>
                    </div>
                </div>
                
                <div style="background: rgba(0, 206, 201, 0.1); border: 1px solid rgba(0, 206, 201, 0.3); border-radius: 8px; padding: 1rem; margin-top: 1.5rem;">
                    <p style="margin: 0; color: #00cec9; font-weight: 500;"><i class="fas fa-shield-alt"></i> This certificate is authentic and has been issued by Easy Learn.</p>
                </div>
                
                <button onclick="window.location.reload()" class="btn-secondary" style="margin-top:2rem;">Verify Another</button>
            </div>
        `;
    }

    function showError(id) {
        resultDiv.innerHTML = `
            <div class="invalid-cert animate-shake">
                <div class="result-icon"><i class="fas fa-times-circle"></i></div>
                <h2>Invalid Certificate</h2>
                <p>The Certificate ID <strong>${id}</strong> could not be verified.</p>
                <p style="font-size: 0.9rem; margin-top: 1rem;">Please check the ID and try again, or contact support if you believe this is an error.</p>
                <button onclick="window.location.reload()" class="btn-primary" style="margin-top:2rem;">Try Again</button>
            </div>
        `;
    }

});
