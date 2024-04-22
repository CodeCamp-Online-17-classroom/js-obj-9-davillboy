// write code here
<script>
        let userInput;
        let userObject = {};

        while (true) {
        userInput = prompt("Enter key-value pair (key:value), or type 'stop' to finish:");

        if (userInput.toLowerCase() === "stop") {
            break;
        }

        let [key, value] = userInput.split(':');

        key = key.trim();
        value = value.trim();

        userObject[key] = value;
        }

        console.log(userObject);

    </script>
