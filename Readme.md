1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById gets the element with the given ID. getElementsByClassName returns an array with all elements with the given class name. querySelector returns the first element matching a CSS selector and querySelectorAll returns a list of all matching elements.

2.How do you create and insert a new element into the DOM?
Ans: I'll use document.createElement() e.g('div') to create the element. Then I'll used appendChild(), append() or similar methods to add the element into the DOM or Document Object Model.

3.What is Event Bubbling and how does it work?
Ans: Event bubbling means an event starts from the target (inner) element and then moves upward through its parent elements until reaching the top of the DOM tree.

4.What is Event Delegation in JavaScript? Why is it useful?
Ans: Event delegation means adding a single event listener to a parent element to handle events on its child elements through bubbling. It saves resources when there are many child elements that would otherwise each need their own listener.

5.What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() stops or prevents the default browser action for that event. But it does not stop eventBubbling. On the other hand, stopPropagation() does not affect the browser's default action for that event, but it stops eventBubbling.
