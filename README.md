[![Build Status](https://travis-ci.org/Automattic/_s.svg?branch=master)](https://travis-ci.org/Automattic/_s)

This is a starter theme based on [Underscores](http://underscores.me/) with scss structure is improved and use Bootstrap 3 framework.

Getting Started
---------------

Download `theme-name` from GitHub. The first thing you want to do is copy the `theme-name` directory and change the name to something else (like, say, `megatherium-is-awesome`), and then you'll need to do some steps.

1. Change theme information in `style.css` file
2. Search for: `t_s-` and replace with: `megatherium-is-awesome-`
3. Search for: `t_s_` and replace with: `megatherium_is_awesome_`
4. Search for: `T_S` and replace with: `Megatherium_Is_Awesome`
5. Search for: `'t_s'` and replace with: `'megatherium-is-awesome'`
6. Search for: `"t_s"` and replace with: `"megatherium-is-awesome"`
7. Search for: `Truongwp underscores` and replace with: `Megatherium Is Awesome`
8. Update the links in `footer.php` with your own information
9. Modily `browserSyncProxy` value in `gulpfile.js`, it is used when compiling scss to css
10. Next, update or delete this readme

Generate CSS
---------------

1. Run `npm install` to install node modules.
2. Run `gulp` to watch changes and compile scss to css.

Now you're ready to go! The next step is easy to say, but harder to do: make an awesome WordPress theme. :)

Good luck!
