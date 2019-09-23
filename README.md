
## Star Wars Info App - About

This app displays info about Star Wars films, characters, and other lore from the Star Wars fictional universe.

### Design Goals

The goal of making this app was to use React to create a website that pulls data from a remote API (https://swapi.co) and dynamically renders page content based on what categories or items the user clicks.

### Additional Features - Not Yet Implemented

1. Add images from another API or source. swapi.co does not have images. This would have to be done in App.handleItemSelect.

2. InfoCard should show the name/title of entries where the API currently just returns a link/array of links to another API page (currently these entries are just filtered out to make the data look cleaner).

3. The ItemList is too long on mobile. The user has to scroll very far down to see the InfoCard. It is OK on desktop, because the InfoCard is sticky position in the 2nd column. On mobile the columns are stacked. On mobile the ItemList should collapse, or maybe have pagination.
