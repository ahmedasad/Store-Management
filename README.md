
### <p align='center'>Store Management  App</p>

#### App is developed using Node JS and Express JS

#### This App contains the following features
  * User can create/manage **Account**
  * User can create/manage **Employees**
  * User can create/manage **Store**
  * User can create/manage **Inventory**

#### The app is created in three layers **Division** (Route-Service-Repo)
   - <kbd> <br> Node JS <br> </kbd> and <kbd> <br> Express JS <br> </kbd> primarily used for app devlopment <br>
   - <kbd> <br> JSONWebtoken <br> </kbd> for authentication/authorization <br>
   - <kbd> <br> JOI <br> </kbd> used for validations <br>
   - <kbd> <br> MySQL2 <br> </kbd> used database <br>
   - Used <kbd> <br> Monolithic <br> </kbd> architecture to design this app <br>
   - App is being accomodated with helper classes for validations and other stuff
   - APIs written, are Asynchronous and uses <kbd> <br> Promises <br> </kbd> for Database operations

 ### App limitations / restrictions
   - user needs to create account to access APIs
   - <kbd> <br> JSONWebtoken <br> </kbd> will be required to perform any action related to profile, employee, store and inventory.
   - App currently allow user to create multi sessions, means user can login from multiple devices at once.
     
#### Diagram represents how an HTTP request is being processed in the system 
<img src="https://user-images.githubusercontent.com/20832655/230745134-d530912d-3f99-4407-af4b-a30ac5573976.jpg"  width="700" height="350">

#### Steps to run app on your device
  - After cloning the repo
  - run *npm init*
  - nodemon *index.js*
