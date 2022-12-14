document.getElementById('btn').addEventListener('click',function(e){

    e.preventDefault()

    // defining object

    var details={
        fullName:'',
        mobileNumber:'',
        emailId:'',
        dateofbirth:'',
        address:'',
        adharno:'',
        panno:'',
        tenth:'',
        inter:'',
        degree:'',
        
    }
        // Storing details in to the object

        details.fullName=document.getElementById('fs').value
        details.mobileNumber=document.getElementById('input_contact').value
        details.emailId=document.getElementById('input_email').value
        details.dateofbirth=document.getElementById('dob').value
        details.address=document.getElementById('br1').value
        details.adharno=document.getElementById('adhar').value
        details.panno=document.getElementById('pan').value
        details.tenth=document.getElementById('10th').value
        details.inter=document.getElementById('12th').value
        details.degree=document.getElementById('ug').value
        

        // sending the object to other fumction

        buildResume(details)        
})
function buildResume(details){

    // injecting details into html using their id's
    document.getElementById('name').innerHTML=details.fullName
    document.getElementById('mobile').innerHTML=details.mobileNumber
    document.getElementById('email').innerHTML=details.emailId
    document.getElementById('dofb').innerHTML=details.dateofbirth
    document.getElementById('adr').innerHTML=details.address
    document.getElementById('aadhar').innerHTML=details.adharno
    document.getElementById('pn').innerHTML=details.panno
    document.getElementById('10').innerHTML=details.tenth
    document.getElementById('12').innerHTML=details.inter
    document.getElementById('ug_resume').innerHTML=details.degree
    

    // turning on the visibility of the resume div

    document.getElementById('div').style.visibility='visible'
}