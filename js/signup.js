const sigupBtn = document.getElementById("sigupBtn");

sigupBtn.addEventListener('click', ()=>{
    const  name = document.getElementById("name").value;
    const  email = document.getElementById("email").value;
    const  password1 = document.getElementById("password1").value;
    const  password2 = document.getElementById("password2").value;

    const  memberOption = document.getElementById("memberOption");
    const memberOptionVal = memberOption.options[memberOption.selectedIndex].value;
    const generationOption = document.getElementById("generationOption");
    const generationOptionVal = generationOption.options[generationOption.selectedIndex].value;

    if(password1!=password2){
        alert("비밀번호가 일치하지 않습니다.");
    }
    else{
        const signUpData = {
          name: "test4",
          email: "test4@naver.com",
          password: "test4",
          member: "NORMAL",
          generation: 1
          };

          // fetch(hostAddress+'app/user', {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify({
          //     name: name,
          //     email: email,
          //     password: password1,
          //     member: memberOptionVal,
          //     generation: generationOptionVal
          //   }),
          // }).then((response) => console.log(response));

          
          
          post(hostAddress, "app/users", signUpData)
            .then((data) => 
              alert.log(data.message))
            .catch((error) => console.log(error));
    }
        
})

async function post(host, path, body, headers = {}) {
  const url = `http://${host}/${path}`;
  console.log("url: " + url)
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  };
  const res = await fetch(url, options);
  const resData = await res.json();

  console.log(`resData: ${resData}`);
  alert(resData)
  
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw Error(data);
  }
}



  
  