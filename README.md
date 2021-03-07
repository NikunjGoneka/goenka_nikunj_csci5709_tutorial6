# Tutorial - 6

* Date Created: 06-03-2021
* Last Modification Date: 06-03-2021
* Website URL: https://nikunj-goenka-tutorial4.herokuapp.com/
* Repository URL: https://github.com/NikunjGoneka/Goenka-Nikunj-csci5709-tutorial4

## Authors
* [Nikunj Goenka](Nikunj.Goenka@dal.ca)

## URL List To view Backend funtionality

* URL for list of all users (GET method)
	http://localhost:3000/user/

* URL for specific user using path parameter (GET Method)
	http://localhost:3000/user/specific/user2

* URL for specific user using body (GET Method)
	http://localhost:3000/user/specific
	BODY:
		{
    			"username": "user2"
		}
		
* URL add new user (POST Method)
	http://localhost:3000/user/addUser
	BODY:
		{
   			"uuid": "SOME UNIQUE ID",
    			"username": "user3",
    			"email": "email3.dal.ca"
		}

* URL update username (PUT Method)
	http://localhost:3000/user/updateUser
	BODY:
		{
   			"username": "user2",
    			"newUsername": "user3"
		}