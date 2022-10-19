
This is an angular app for converting EUR to USD as default conversion
# Currencyconverter

#Prerequisites to run this application
	node.js
	VS code
	angular cli -> npm install @angular/cli --save
	npm install -> to install dependencies
	User Must have account on API layer: https://apilayer.com/marketplace/fixer-api#documentation-tab
	User Must have unique key generated on: https://apilayer.com/marketplace/fixer-api#documentation-tab
	Please paste that key into Environments file of this project inorder to run this project else this project will not work.

#Not covereted features 
	Details page could not be worked on because of time constraint.
	

#Good Angular features used for implementation in this project
	- modularization for the features.
	- Lazy-loading
	- RxJS operators like BehaviourSubjects, pipe, mergeMap etc
	- 3rd party API interation 
	- custom Error handling

#Covered features:
	input field to collect the amount for conversion
	Dropdowns to choose between USD and EUR
	Same dropdown conversion error validation covered
	Valdiation error if amount is less than equals to 1
	Amount value set to default to 1
	Covert button for the conversion
	Popular 9 more related conversions for the amount field
	Responsiveness has also been taken care