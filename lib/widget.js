

export const open = (locationId, messageBody) => {
    window.parent.postMessage(
        {
          type: "OPEN_WIDGET",
          location_id: locationId,
          message_body: messageBody,
          mock_api_call: true  // Only use this during development. It mocks an API call without actually making a request
        },
        "*"
      )
}

export const close = (messageBody) => {
    window.parent.postMessage(
        {
          type: "CLOSE_WIDGET",
          value: true,
        },
        "*"
      )
}