# Applying Redux to a React Project

## Description

This project is a single-page application built with React. The challenge was to use an already built app, refactor the component's state using redux, thunks and practice unit testing.

## What will you need?

First, clone the project's repository, which is our front-end:

```
git clone https://github.com/cris0k/Nodepop_Redux
```
Then, open a new empty window in your editor and clone the repository that will be used as our backend:

```
git clone https://github.com/davidjj76/nodepop-api
```
Ones both are cloned, install all the dependencies with:

```
npm i
```

## Instuctions to run the website

Now that everything is set, run `nodepop-api` and `Nodepop-react` with:

```
npm start
```
On the `nodeppop-api`'s console you will be provided with a `swagger` link where you will need to register and get the credentials to be able to log in into the app.

Here is what you should expect to see one you logged in:
# ![alt text](https://github.com/cris0k/Nodepop_Redux/blob/main/src/assets/images/Screenshot-NodepopRedux.png)

## What can you do ?

- `Log in` : It allows you to log in into the webside if you already have an user created. Your username will appear on the main page's top-right side.

- `Adverts List` : On the main page you will see all the adverts that have been posted, from the newest to oldest.

- `Filter`: You can filter by advert name, price range, if it is on sale or someone wants to buy it and by tags.

- `Advert detail` : If you click on any advert, you can read more information about that specific product.

  * `Delete Advert` Button: It will delete that post, if you wish and redirect to the main page if you do so.

- `Post New Advert` : You will be able to post your own advert. 

