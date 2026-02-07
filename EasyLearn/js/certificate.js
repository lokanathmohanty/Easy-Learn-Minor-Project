// Certificate Generator

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const courseId = urlParams.get('courseId');

// Get user data from multiple sources
function getCurrentUser() {
    // Check localStorage for mockUser
    const mockUser = JSON.parse(localStorage.getItem('mockUser'));
    if (mockUser) return mockUser;

    // Check sessionStorage for firebaseUser
    const firebaseUser = JSON.parse(sessionStorage.getItem('firebaseUser'));
    if (firebaseUser) return firebaseUser;

    // Check localStorage for any other user storage
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) return user;

    return null;
}

const currentUser = getCurrentUser();

// Toastr config
toastr.options = {
    "closeButton": true,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "timeOut": "4000"
};

// Check if user is logged in
if (!currentUser) {
    toastr.error('Please login to view certificates');
    setTimeout(() => window.location.href = 'index.html', 1500);
}

// Get course data
const course = COURSES_DATA?.[courseId];
if (!course) {
    toastr.error('Course not found');
    setTimeout(() => window.location.href = 'dashboard.html', 1500);
}

let generatedCertId = '';
let enteredUserName = '';

// Generate certificate with the entered name
function generateCertificate(userName) {
    if (!course) return;

    // Use the entered name
    enteredUserName = userName;
    document.getElementById('recipient-name').textContent = userName;

    // Course name
    document.getElementById('course-name').textContent = course.title;

    // Date
    const completionDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('cert-date').textContent = completionDate;

    // Certificate ID
    const year = new Date().getFullYear();
    const shortCourseId = (courseId.length > 6 ? courseId.substring(0, 6) : courseId).toUpperCase();
    const userHash = currentUser.uid ? currentUser.uid.substring(0, 6).toUpperCase() : Math.random().toString(36).substring(2, 8).toUpperCase();

    generatedCertId = `LUMINA-${year}-${shortCourseId}-${userHash}`;
    document.getElementById('cert-id').textContent = generatedCertId;

    // Certificate data object
    const certificateData = {
        id: generatedCertId,
        studentName: userName,
        courseName: course.title,
        courseId: courseId,
        issueDate: completionDate,
        issuedAt: new Date().toISOString(),
        instructor: 'Basudev Nayak',
        director: 'Lokanath Mohanty',
        status: 'Active',
        verified: true
    };

    // Store in localStorage (for certificate records)
    let issuedCertificates = JSON.parse(localStorage.getItem('issuedCertificates')) || {};
    issuedCertificates[generatedCertId] = certificateData;
    localStorage.setItem('issuedCertificates', JSON.stringify(issuedCertificates));

    console.log('Certificate generated:', generatedCertId);
    console.log('User name:', userName);
}

// Download Button Logic (Dropdown)
const downloadBtn = document.getElementById('download-btn');
const downloadMenu = document.getElementById('download-menu');

downloadBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    // Toggle menu
    downloadMenu.style.display = downloadMenu.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown when clicking outside
document.addEventListener('click', () => {
    if (downloadMenu) downloadMenu.style.display = 'none';
});

// Download PNG
document.getElementById('download-png')?.addEventListener('click', async () => {
    downloadImage();
});

// Download PDF
document.getElementById('download-pdf')?.addEventListener('click', async () => {
    downloadPDF();
});


async function downloadImage() {
    try {
        toastr.info('Generating PNG...');
        const certificate = document.getElementById('certificate');
        const canvas = await html2canvas(certificate, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        });

        canvas.toBlob((blob) => {
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.download = `${enteredUserName || 'Student'}_${course.title}_Certificate.png`;
            link.href = url;
            link.click();
            toastr.success('Downloaded PNG successfully!');
        });
    } catch (error) {
        // Download error
        toastr.error('Failed to download certificate');
    }
}

async function downloadPDF() {
    try {
        toastr.info('Generating PDF...');
        const { jsPDF } = window.jspdf;

        const certificate = document.getElementById('certificate');
        const canvas = await html2canvas(certificate, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        });

        const imgData = canvas.toDataURL('image/png');

        // A4 Landscape size: 297mm x 210mm
        const pdf = new jsPDF('l', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();

        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

        pdf.save(`${enteredUserName || 'Student'}_${course.title}_Certificate.pdf`);

        toastr.success('Downloaded PDF successfully!');
    } catch (error) {
        // PDF error
        toastr.error('Failed to generate PDF');
    }
}

// Share certificate
document.getElementById('share-btn')?.addEventListener('click', () => {
    const verifyUrl = `${window.location.origin}/verify.html?id=${generatedCertId}`;
    const shareText = `🎓 I just completed ${course.title} at Easy Learn! Verify my certificate here: ${verifyUrl} #OnlineLearning #Achievement`;

    if (navigator.share) {
        navigator.share({
            title: 'My Certificate',
            text: shareText,
            url: verifyUrl
        }).then(() => {
            toastr.success('Shared successfully!');
        }).catch((error) => {
            // Share cancelled
        });
    } else {
        navigator.clipboard.writeText(shareText).then(() => {
            toastr.success('Link copied to clipboard!');
        });
    }
});

// Edit Certificate Name - allows user to change their name
window.editCertificateName = function () {
    // Clear saved name for this course
    localStorage.removeItem(`certificateName_${courseId}`);

    // Reload page to show the name modal
    window.location.reload();
};

// Initialize - Show name modal first
document.addEventListener('DOMContentLoaded', () => {
    const nameModal = document.getElementById('nameModal');
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateCertBtn');
    const nameError = document.getElementById('nameError');

    // Use course-specific key for saved name
    const savedNameKey = `certificateName_${courseId}`;
    const savedName = localStorage.getItem(savedNameKey);

    if (savedName) {
        // User already entered name for THIS course before, skip modal
        nameModal.style.display = 'none';
        generateCertificate(savedName);

        // Show success message
        setTimeout(() => {
            toastr.success('🎉 Certificate loaded!', '', { timeOut: 3000 });
        }, 500);
        return; // Exit early - don't set up modal listeners
    }

    // Pre-fill with existing user name if available
    if (currentUser) {
        const defaultName = currentUser.displayName || currentUser.name || '';
        if (defaultName) {
            nameInput.value = defaultName;
        }
    }

    // Focus on input
    setTimeout(() => nameInput.focus(), 500);

    // Handle Enter key
    nameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });

    // Generate certificate on button click
    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();

        if (!name) {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#ff6b6b';
            nameInput.focus();
            return;
        }

        // Save name to localStorage with course-specific key
        localStorage.setItem(savedNameKey, name);

        // Hide modal
        nameModal.style.display = 'none';

        // Generate certificate with the entered name
        generateCertificate(name);

        // Show congratulations animation
        setTimeout(() => {
            toastr.success('🎉 Certificate generated successfully!', '', {
                timeOut: 5000
            });
        }, 500);
    });
});
