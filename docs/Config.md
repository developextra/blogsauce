- `error`
    - `log`
        - Only logs error messages when `true`
    - `prefix`
        - String that prepends the error message
    - `level`
        - Tolerance level, were Zero Tolerance means
        stop the program if an error is encountered.
        Give it `anything` besides the number 0 to
        allow the program to continue with errors
    - `style`
        - Applies styling to error messages using [chalk](https://github.com/chalk/chalk)
        - `color`
            - Apply color the error message. Expects either a valid color, or false.
            If false, no colors get applied. If `all` is false, apply colors by section
            - Valid Colors: [black](#), [red](#), [green](#), [yellow](#), [blue](#), [magenta](#), [cyan](#), [white](#), [gray](#)
            - `all`
            - `prefix`
            - `message`
        - `bold`
            - Make the error message bold. Expects either true or false. If `all` is false, 
            make the message bold by section
            - `all`
            - `prefix`
            - `message`
    - `message`
        - An unordered list of runtime error messages. The object keys are used
        as an "index".
