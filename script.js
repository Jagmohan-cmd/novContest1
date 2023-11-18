const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    console.log("Developers: ");
    data.forEach((e) => {
        if(e.profession == "developer"){
            console.log(e.name);
        }
    })
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter your name");
    const age = prompt("Enter your age");
    const profession = prompt("Enter your profession");

    const newData = {name : name , age : parseInt(age) , profession : profession};
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    const removeAdmins = data.filter((e) => e.profession !== "admin");
    console.log(removeAdmins);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const dummyArray = [
        { name: 'Doe', age: 35, profession: 'developer' },
        { name: 'Eve', age: 27, profession: 'admin' }
    ];
    const resultArray = data.concat(dummyArray);
    console.log(resultArray);
  }
  
  // 5. Average Age
  function averageAge() {
    const totalAge = data.reduce((prev , current) => prev + current.age ,0)
    const averageAges = totalAge / data.length;
    console.log("Average Age: " , averageAges);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    const above25 = data.some((e) => e.age > 25);
    console.log("Above25: " , above25 );
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
   data.forEach((e) => {
        console.log("All Professions: " , e.profession);
    } );
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a , b) => a.age - b.age);
    console.log("Sort by age: " , data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const john = data.find((e) => e.name === 'john');
    if (john) {
        john.profession = 'manager';
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    const totalDevelopers = data.filter((e) => e.profession === "developer").length;
    const totalAdmins = data.filter((e) => e.profession === "admin").length;

    console.log("Total Developers: " , totalDevelopers);
    console.log("Total Admins: " , totalAdmins);
  }