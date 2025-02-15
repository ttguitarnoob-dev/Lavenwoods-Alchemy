# Lavenwoods-Alchemy

## App name: Lavenwoods Alchemy
User chooses between 4 mages of an element class.  The mage they choose will craft them a potion based on their element, and the user will be able to define the effects of their potion. Once the potion is created, it will be added to their potion bag.


 ### Welcome to Lavenwoods Alchemy! If you're in search of a potion brewery, you've choosen the right shop! Within our shop, you can summon four mages, possessing different elemental sorcery! You can choose a mage, learn a little bit about them, and then brew a potion with their element! You can choose your potion name, the effects the potion contain, and then your favorite mage will synthesize your brew! You will be able to find your brew within your potion bag; you can drink your potion, edit your potion attributes, or dump it out! The possibilities of your potions are endless! Enjoy Lavenwoods Alchemy!

## Basic low-fidelity wireframes

![20220124_101519](https://user-images.githubusercontent.com/95322104/150819360-daf3cc97-42ed-4b6f-8718-9dc54c964d52.jpg)


![20220124_101553](https://user-images.githubusercontent.com/95322104/150820116-5a7d5186-eb85-4d5a-b425-325798373d4f.jpg)


![A31BC3DE-14F5-463D-9061-45857229A7BB_1_105_c](https://user-images.githubusercontent.com/95322104/150820354-191d1557-60c9-450c-b09d-821e986a1615.jpeg)


## Updated Wireframe


![Screen Shot 2022-01-31 at 9 02 30 AM](https://user-images.githubusercontent.com/95322104/151818026-d980280a-e3b2-4a86-ab65-5895f9802519.png)


![Screen Shot 2022-01-31 at 9 03 33 AM](https://user-images.githubusercontent.com/95322104/151818402-d719c89b-5bb8-4b36-bd5c-35113b87df8d.png)



![Screen Shot 2022-01-31 at 9 04 40 AM](https://user-images.githubusercontent.com/95322104/151818791-4907b0ab-e63f-42a6-9d52-505ac147cb81.png)



![Screen Shot 2022-01-31 at 9 05 03 AM](https://user-images.githubusercontent.com/95322104/151819153-e68285a0-e035-4680-8bfd-a5088d59bb18.png)


![Screen Shot 2022-01-31 at 9 05 19 AM](https://user-images.githubusercontent.com/95322104/151819453-c7d00ddd-4792-4114-a5d7-173c611e1fa6.png)


![Screen Shot 2022-01-31 at 9 05 32 AM](https://user-images.githubusercontent.com/95322104/151820301-0ced4254-3578-4cc9-9a6b-6188946f03b7.png)



![Screen Shot 2022-01-31 at 9 16 35 AM](https://user-images.githubusercontent.com/95322104/151820508-e2bdc7d3-0142-402f-8410-5261e595f07b.png)

## User stories
  As a user, I want to find Lavenwoods Alchemy and enter the shop
  As a user, I want to be able to summon mages to help me brew my potion. 
  As a user, I want to be able to name my potion and create effects.
  As a user, I want to see my potion once its done.
  As a user, I want to be able to make another potion once I am done making one potion.


## Stretch Goals
  I want a place where I can view the potions I've made.
  I want to be able to use different ingredients for my potion.
  I want to be able to create a potion from scratch without the help of a mage.
  I want to be able to combine elements.


## MVP goals list
Main page with clickable list of Mages
Create Mage button
View Potion bag button
Going back button
Click on mage: Brought to a page with information about that mage
Request Potion button
Request Potion: brought to a page with a form
POTION NAME
Text field
RadioButton for predetermined potion element
Earth
Fire
Water
Air
TextArea for custom potion effects
“Create Potion” button
Potion index page with list of potions you created
Click on potion to “show” potion name and effects.
Back to main page button


## Stretch goals:


Separate “Create” Page for each mage
Ingredient list on create page that intelligently creates potion effects based on ingredient combo.



## Database ERD diagrams




![Screen Shot 2022-01-27 at 11 49 04 AM](https://user-images.githubusercontent.com/95322104/151415328-279adda2-bf1d-40c8-a137-8baf9a8df587.png)










## RESTful routing chart for each database resource

![Screen Shot 2022-01-24 at 10 22 34 AM](https://user-images.githubusercontent.com/95322104/150822426-94e23d33-615e-4986-b2de-151aa9c08cde.png)



Api ideas: On potion create page, wizard says “ Ok let’s get this potion started.  You know, I heard the weirdest thing the other day.  [Random fact api here]”Returns the plain text version of a random fact.
Request type:
GET https://ffa.aakhilv.me/text
