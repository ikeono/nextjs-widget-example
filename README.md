# Example Next.js App

This is a simple Next.js app to illustrate how to open the widget for a specific location. On the left is the shop's "website" and on the right are messages that were sent to the shop. (e.g. On the left is what the customer would see and on the right is what the shop staff would see.)

#### Files of interest

- `./public/ikeonoWidget.js` is the injection script loaded once `./pages/_app.js`
- `./lib/widget.js` is a simple wrapper for communicating with the widget
- `./components/ShopPage.js` is where the widget is opened
- `./pages/_app.js` closes the widget on url change

#### Setup

```
npm install
npm run dev
open http://localhost:3001
```

---

# Changelog

## Hide Default Button

There is a new parameter to hide the default Ikeono button. This should be treated similar to how Google Analytics in that you load it once. Reference `./public/ikeonoWidget.js`.

```
...
const hideButton = true;
ikeono.init(defaultLocation, '#333333', false, false, 0, locations, hideButton);
```

## Open the widget

There are two new parameters on the `OPEN_WIDGET` message. Reference `./lib/widget.js`

```
window.parent.postMessage({
    type: "OPEN_WIDGET",
    location_id: locationId,   // This is the Ikeono UUID of the shop
    message_body: messageBody, // Optional, prefilled message
    mock_api_call: true        // Simulate a successful request without making a network call
},  "*")
```

## Close the widget

There is a new message to close the message. For example, on a path change you may want to close the widget. Reference `./lib/widget.js`

```
window.parent.postMessage({
      type: "CLOSE_WIDGET",
      value: true,
}, "*")
```
