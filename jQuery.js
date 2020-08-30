/*              

******* Ways to set up jQuery *******



Local Installation - Downloaded to the local machine and then inclueded into the HTML code. 

CDN based version - Allows for us to Link the libary Through Content Delivery Network (CDN).

For this activity i will be using the CDN method. Which steps i have listed below.



For google CND the code below is used:
 
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>



Microsoft CDN code below:

 
<head>
<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.3.1.min.js"></script>
</head>


According to the jQuery Tutorial we are working though using the CDN linked method is faster
compared to local version. This is only faster by a few milliseconds. but seems to be the better 
choice for me.




******* jQuery Basics *******



$ sign - This the alias for the function called jQuery. ways it can be written are as $() or jQuery().
it is essentially a shortcut for JavaScript's findElementByID(), findElementByClass and so on.

basic syntax: " $(selector).action() "

$ sign to define the html element, then .action for an action to be performed on the elements.

selectors:

$("a") - all anchor tags
$("p") - all paragrah tags
$("p.main") - all paragraph tags with a class of main

class names when referenced a period ( . ) must be used before the class name. for example

$(".main") - would call all elements with the class name of main.

when ID's are referenced they must have a ( # ) tag before the name. for example

$("#main") - would call the element with the ID of main


jQuery Selectors - these are strings that allow to target elements of your html files. and perform
actions and events to the selected elements.

Three main ways to select elements are.

Based on the element name, for example: $("a")

Based on the element ID, for example: $("#ID")

Based on the elements class attribute, for example: $(".className")




******* jQuery $(document).ready() function *******

syntax: - $(document).ready( function )

this document ready event occurs when the Document object model has been loaded.
this event only gets triggered once all assets have been completely received.
*/