function myFunction6_02() {
  
  const members = ['Bob', 'Tom', 'Jay'];
  console.log(hasMember(members, 'Tom')); //true
  console.log(hasMember(members, 'Ivy')); //false

}


function hasMember(members, checkMember) {

  return members.includes(checkMember);

}