var application_user = function() {
	var userid;
	var username;
	var email;
	var role;


	return {
        
        set_userdetails: function(appuserid, appusername, appemail, approle) {

        	   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              
        	   
             if(typeof appusername === 'string' 
        	   	    || typeof appuserid === 'string'
        	   	    || typeof appemail === 'string'
        	   	    || typeof approle === 'string') {

              username =  String(appusername);
              userid = String(appuserid);
              email = String(email);
              role = String(role); 

        	   	
        	   
        	   }else {
                throw {
                  name : "TypeError",
                  message : "appuserid,appusername,appemail,approle needs to be strings"
                   };
             }

        	   	if(re.test(appemail) === false) {
        	   		throw {  
        	   			name : "NotValidEmailError",
        	   			message : "Email is not valid"
        	   		};
        	   	}



        	

        	   	return this;

        	   

        },

      get_username: function() {
      	return username;
      },

      get_userid: function() {
      	return userid;
      },

      get_useremail: function() {
      	return email;
      },

      get_role: function() {
      	return role;
      }


	}


}

exports.appuser = application_user;