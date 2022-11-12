alert("testing");

function saveData(){
    let username = document.getElementById('Username').value;
    let password = document.getElementById('password').value;
    axios.post(
        "http://localhost:8080/save",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          }
        }
      )
      .then(response =>{
        if(response.status == 200){
            alert("Data Saved Successfully");
        }
      })
      .catch(error =>{
        alert(error);
      })
}

function test(){
    alert("test");
}
document.getElementById('Submit').addEventListener('click',test);