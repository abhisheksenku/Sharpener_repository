async function handleFormSubmit(event) {
    event.preventDefault();
  
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
  
    try {
      const response = await axios.post("/users/add", { name, email, phone });
      alert(response.data);
      fetchUsers(); 
    } catch (err) {
      alert("Error: " + err.response?.data || err.message);
    }
  }
  
  async function fetchUsers() {
    try {
      const res = await axios.get('/users/all');
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      res.data.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} | ${user.email} | ${user.phone}`;
        userList.appendChild(li);
      });
    } catch (err) {
      console.error(err);
    }
  }
  
  window.onload = fetchUsers;
  