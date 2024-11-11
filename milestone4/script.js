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
    var resumeHTML = "\n<h2><b>Editable Resume</b></h2>\n<h3>Personal information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Contact number:</b><span contenteditable=\"true\">").concat(contactNo, "</span></p>\n\n<h3>Education</h3>\n<p contenteditable=\"true\">").concat(education, "</p>\n\n<h3>Experience</h3>\n<p contenteditable=\"true\">").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p contenteditable=\"true\">").concat(skills, "</p>\n");
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
