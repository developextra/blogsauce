Publishing will be done through the build process. It will 
require you to use [Git](https://git-scm.com) as your VC System, 
because of the following feature.

If you have the `publish` option as `false` in your snippet,
then during the build, it'll check in .gitignore
for the filepath. If not there, it will append it to the file.
Then you can just `git push` as you wish. But when you have
`publish` option as `true`, then it will remove the ignore statement.