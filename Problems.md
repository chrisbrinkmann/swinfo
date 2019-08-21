## App Component States

categoryUrl: 'urlString' - this is used to do API fetch. it gets set via handler function in App when a Button component (App -> Header -> NavLinks -> Button) is clicked

itemList: [{item1}, {item2}, etc.] - this is the data that is returned from the API fetch. It should be set immediately following setState(categoryUrl) when the Button component is clicked. It should be used to render the ItemList component with <li> elements (App -> Main -> ItemList).

selectedItem: {item} - this is an item from inside of itemList. it gets set via handler function in App when the user clicks on a <li> in the ItemList component

## Problem 1 - How to setState(itemList)?

Can't setState(itemList) in the same handler function that sets categoryUrl because we use the categoryUrl state to make the fetch call that is needed to setState(itemList)... and since setState() is async, the categoryUrl state will not be updated in time for us to use in the fetch

Can't do it in componentDidUpdate because calling setState() within will again call ComponentDidUpdate causing an infinite loop

### Possible Solutions

1. add conditional logic for setState() within componentDidUpdate so that it is only called one time... How to achieve this??

2. Have the fetch and setState(itemList) in the same handler function that sets categoryUrl but somehow use async await for setState(categoryUrl) to finish.

## Problem 2 - Unnecessary fetch calls
If a fetch call is placed within componentDidUpdate, then anytime
setState(SelectedItem) is run, it will trigger the fetch call, even though we should already have the data that we need.

### Possible Solution

Move the selectedItem state from App to Main. Now both App and Main will have state. Is this possible for a child to also have state (and props)? Is it bad design to have more than one component with state?
