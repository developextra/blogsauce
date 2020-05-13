- [key] [level] [type] - [notes]
---

- `entry` | string - the relative path to your source posts (should be a directory that holds either .md || .markdown || .html files)
- `prefer` | object - configurations for blogsauce.new()
    - `post` || - new post boilerplate format (`.html`|`.md`|`.markdown`)
    - `snippet` || - new snippet boilerplate format (`.js`|`.json`|`.yml`|`.yaml`)
    - `boilerplate` || - if true it will populate new posts with `Hello World` and new snippets with `blogsauce.config.snippet.config`
    - `smart` || - if true it will fill in the `date` and update the `title` in the new snippet file 
    - `date` || object 
        - `format` ||| string - If "," formats dates like so "m d, y". If "/" formats dates like so "m/d/y". Else throws error
        - `months` ||| array - These items are used as the `month` value for post/snippet dates when created with blogsauce.new()

- `markedJs` | object - options passed to [marked.js](https://github.com/markedjs/marked) in the case of markdown posts

- `sanitizeHtml` | object - options passed to [sanitize-html](https://npmjs.com/package/sanitize-html) in the case of a snippet file having `output: { sanitize: true }`.
You'll also be able to directly overwrite these options for a specific post, in the case of a snippet file having `output: { sanitizeHtml: {} }`

- `error` | object - configurations for blogsauce.error()
    - `log` || boolean - Only logs error messages when `true`
    - `prefix` || string - String that prepends the error message
    - `level` || integer - Tolerance level, were Zero Tolerance means stop the program if an error is encountered. 
    Give it `anything` besides the number 0 to allow the program to continue with errors
    - `style` ||  object - Applies styling to error messages using [chalk](https://github.com/chalk/chalk)
        - `color` ||| object - Apply color to the error messages. Valid Colors: 
        [black](#), [red](#), [green](#), [yellow](#), [blue](#), [magenta](#), [cyan](#), [white](#), [gray](#)
            - `all` |||| string - If true color the entire error. If false the following options allow you to color the error by section.
            - `prefix` |||| string - If true, color the error prefix.
            - `message` |||| string - If true, color the error message.
        - `bold` ||| object
            - `all` |||| boolean - If true bold the entire error. If false the following options allow you to bold the error by section.
            - `prefix` |||| boolean - If true, bold the error prefix.
            - `message` |||| boolean - If true, bold the error message.
    - `message` || object - An unordered list of program error messages. The object keys are used
        as an "index". I wouldn't recommend modifying current message keys. Feel
        free to change the value though that's totally expected. What I do
        recommend is adding new keys if you want to handle new error cases.
        The only reason I say that is because the 
        program is expecting the error messages that exist in the default config. 
        So if you change the error key you would have to change all the cases
        where it's used. That means modifying the source code. If your going to 
        do that might as well fork it, and help a brother out :heart:.
