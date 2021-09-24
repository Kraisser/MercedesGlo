let testDriveForm = document.querySelector(`.form-test-drive`),
serverUrl = `https://jsonplaceholder.typicode.com`;

testDriveForm.addEventListener(`submit`, (e) => sendForm(e));

function sendForm(e) {
  e.preventDefault();

  let data = {};
  
  for (let {name, value} of testDriveForm.elements) {
    
    if (name) {
      data[name] = value;
      if (!value || value == ` `) {
        return;
      }
    }
  }

  fetch(`${serverUrl}/posts`, {
    method: `POST`,
    body: JSON.stringify(data),
  }).then(response => {

    if (response.status === 200 || response.status === 201) {
      return response.json();
    } else {
      throw new Error(response.status); 
    }

  }).then(data => {
    testDriveForm.reset();
  }).catch(error => {
    console.log(error);
  });

}