const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
//handles form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    //input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const contactNo = (document.getElementById('contact number') as HTMLInputElement).value;
    const education = (document.getElementById('Education') as HTMLInputElement).value;
    const experience = (document.getElementById('Experience') as HTMLInputElement).value;
    const skills = (document.getElementById('Skills') as HTMLInputElement).value;
    //generate resume content
    const resumeHTML = `
<h2><b>Editable Resume</b></h2>
<h3>Personal information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>Contact number:</b><span contenteditable="true">${contactNo}</span></p>

<h3>Education</h3>
<p contenteditable="true">${education}</p>

<h3>Experience</h3>
<p contenteditable="true">${experience}</p>

<h3>Skills</h3>
<p contenteditable="true">${skills}</p>
`;
    //display resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
})
