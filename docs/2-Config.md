- `prefer`
    - `post` - new post boilerplate format (`.html`|`.md`|`.markdown`)
    - `snippet` - new snippet boilerplate format (`.js`|`.json`|`.yml`|`.yaml`)
    - `boilerplate` - if true it will populate new posts with `Hello World` and new snippets with `config.snippet.config`
    - `smart` - if true it will fill in the `date` and update the `title` in the new snippet file 

- `markedJs` - options passed to [marked.js](https://github.com/markedjs/marked) in the case of markdown posts

- `sanitizeHtml` - options passed to [sanitize-html](https://npmjs.com/package/sanitize-html) in the case of a snippet file having `output: { sanitize: true }`.
You'll also be able to directly overwrite these options in the case of a snippet file having `output: { sanitizeHtml: {} }`

- `error`
    - `log` | Only logs error messages when `true`
    - `prefix` | String that prepends the error message
    - `level` | Tolerance level, were Zero Tolerance means stop the program if an error is encountered. 
    Give it `anything` besides the number 0 to allow the program to continue with errors
    - `style` | Applies styling to error messages using [chalk](https://github.com/chalk/chalk)
        - `color` || Apply color the error message. Expects either a valid color, or false. If false, no colors get applied. 
        If `all` is false, apply colors by section. Valid Colors: 
        [black](#), [red](#), [green](#), [yellow](#), [blue](#), [magenta](#), [cyan](#), [white](#), [gray](#)
            - `all`
            - `prefix`
            - `message`
        - `bold` || Make the error message bold. Expects either true or false. If `all` is false, make the message bold by section
            - `all`
            - `prefix`
            - `message`
    - `message` | An unordered list of runtime error messages. The object keys are used
        as an "index". I wouldn't recommend modifying current message keys. Feel
        free to change the value though that's totally expected. What I do
        recommend is adding new keys if you want to handle new error cases.
        The only reason I say that is because the 
        program is expecting the error messages that exist in the default config. 
        So if you change the error key you would have to change all the cases
        where it's used. That means modifying the source code. If your going to 
        do that might as well fork it, and help a brother out :heart:
