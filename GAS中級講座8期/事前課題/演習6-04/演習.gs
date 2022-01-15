function myFunction6_04() {

  const members = [['Bob'], ['Tom'], ['Ivy']];
  console.log(hasMember(members, 'Bob')); //true
  console.log(hasMember(members, 'Ivy')); //false


}

function hasMember(members, checkMember) {

  const flatMembers = members.flat();
  return flatMembers.includes(checkMember);

}