# Tutorial - 6

* Date Created: 06-03-2021
* Last Modification Date: 06-03-2021
* Website URL: https://nikunj-goenka-tutorial-6.herokuapp.com
* Repository URL: https://github.com/NikunjGoneka/goenka_nikunj_csci5709_tutorial6

## Authors
* [Nikunj Goenka](Nikunj.Goenka@dal.ca)

## URL List To view Backend funtionality

* URL for list of all users (GET method)
	https://nikunj-goenka-tutorial-6.herokuapp.com/user/

* URL for specific user using path parameter (GET Method)
	https://nikunj-goenka-tutorial-6.herokuapp.com/user/specific/user2

* URL for specific user using body (GET Method)
	https://nikunj-goenka-tutorial-6.herokuapp.com/user/specific
	BODY:
		{
    			"username": "user2"
		}
		
* URL add new user (POST Method)
	https://nikunj-goenka-tutorial-6.herokuapp.com/user/addUser
	BODY:
		{
   			"uuid": "SOME UNIQUE ID",
    			"username": "user3",
    			"email": "email3.dal.ca"
		}

* URL update username (PUT Method)
	https://nikunj-goenka-tutorial-6.herokuapp.com/user/updateUser
	BODY:
		{
   			"username": "user2",
    			"newUsername": "user3"
		}
