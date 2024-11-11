var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handles form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    //input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var contactNo = document.getElementById('contact number').value;
    var education = document.getElementById('Education').value;
    var experience = document.getElementById('Experience').value;
    var skills = document.getElementById('Skills').value;
    //generate resume content
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Contact number:</b>").concat(contactNo, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
