if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }
  
  function initializeCode() {

    const submitDataButton = document.getElementById("submit-data");

    submitDataButton.addEventListener("click", function() {
        const inputText = document.getElementById("input-text");

        fetch("http://localhost:3000/list", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: '{ "text": "' + inputText.value + '" }'
        })
        .then(response => response.json())
    })

  }