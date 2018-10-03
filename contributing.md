# Using Git and GitHub

1. Fork the repository (on Github).
![Fork the repository](https://i.imgur.com/tKuD70w.png)

1. Clone the forked repo on your computer (using git) -	
![Repository url ](https://i.imgur.com/Eu7mlvy.png)
	``` 
	git clone <repo-url>
	```
1. (To update your forked repository with the original repository) -
   * Add remote named `upstream` to refer to the original GitHub repository - 
     ```git remote add upstream <original-repo-url>```
   * Makes sure you are on master -
     ```git checkout master```
   * Fetches all branches of that remote - 
     ```git fetch upstream```
   * Rewrites your master branch so that commits that are not in upstream/master are replayed on top of your master branch - 
     ```git rebase upstream/master```
   * After this, you might need to force push your origin master -
     ```git push -f origin master```
1. Create a new branch for new feature/bug fix etc - 
		```git branch <name of branch>```
1. Switch to branch -
		```git checkout <name of branch>```
1. Make changes.
1. Add the modified files to the staging area - 
```git add <filename>```
or to add all modified files
```git add . ```
1. Commit - 
```git commit -m "<msg here>"```
1. Push to GitHub - 
```git push origin "<name of branch>"```
1. Create a PR on GitHub.

###Happy Contributing.

