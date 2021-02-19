/********************
 * YOUR CODE BELOW! *
 ********************/

function moreThan5(num){ return num > 5}

function isNewTopScore(myScore , topScore) { 
  return myScore > topScore
}
function isInDanger(gradeNumber){
  return gradeNumber >= 60 && gradeNumber <= 71

}
function isCoasting(gradeNumber) {
  return gradeNumber >= 72 && gradeNumber <= 83
}
function isSucceeding(gradeNumber){
  return gradeNumber >= 84 && gradeNumber <= 92
}
function isFailing(gradeNumber){
  return gradeNumber < 60 ;
} 

function isAcing(gradeNumber) {
  return gradeNumber > 92
}

function isStudent(myName) {
  return "student" === myName
}

function isTeacher (myrole){
  return 'teacher' === myrole
}

function isAdmin(myrole) {
  return "admin" === myrole
}
function isElementary(myrole){
return "elementary" === myrole
} 
function areDifferentPeople(nameOne , nameTwo){
  return nameOne !== nameTwo
}

function isMiddleSchoolTeacher(role ,level) {
 return isTeacher(role) &&  level >= 6  && level <= 8
}
function notAnElementarySchoolAdministrator(level,role){
  return  "elementary" !== level || "admin" !== role
} 

/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
