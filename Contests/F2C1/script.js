let data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "AJ", age: 23, profession: "Pudhakari" },
    { name: "Deepak", age: 25, profession: "admin" }
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    data.forEach((employee) => {
        if(employee.profession == "developer"){
            console.log(employee);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
    let temp_name = prompt("Enter Name");
    let temp_age = prompt("Enter age");
    let temp_Profession = prompt("Enter Profession");
    data.push(
        {
            name : temp_name,
            age : parseInt(temp_age),
            profession: temp_Profession,
        }
    )
    console.log(data);
    // console.log(temp_name,temp_age,temp_Profession);

  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let updated_Data = data.filter((employee) => employee.profession != "admin");
    console.log(updated_Data);
    data = updated_Data;
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    let extra_Data = [
        { name: "VJ", age: 23, profession: "Officer" },
        { name: "TK", age: 29, profession: "SDE" },
      ];
      let join_Data = data.concat(extra_Data);
      data = join_Data;
      console.log(data);
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    data.forEach((employee) => sum+= employee.age)
    console.log(sum/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let above25 = data.filter(employee => employee.age > 25);
    console.log(above25.length>0);

    // console.log(data.some(employee => employee.age >25));
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let uniqueProfessions = [];

    data.forEach(employee => {
        if(!uniqueProfessions.includes(employee.profession)){
            uniqueProfessions.push(employee.profession)
        }
    })
    console.log(uniqueProfessions);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    let sortedarray = data.sort((a,b) => a.age-b.age);
    data = sortedarray;
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    let newProf = prompt("Enter New Profession")
    data.forEach(employee =>{
        if(employee.name == "john"){
            employee.profession = newProf;
        }
    })
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admins_dev_count = {
        developer : 0,
        admin :0
    }
    data.forEach(employee => {
        if(employee.profession =="developer" || employee.profession == "admin"){
            admins_dev_count[employee.profession]++;
        }
    })
    console.log(admins_dev_count);
  }