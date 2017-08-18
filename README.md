### When redirecting to a route under a container, the child components won't get rendered

I have several session routes like `/login` and `/forgotpassword`. I wrap these routes in the `SessionContainer`. The rest of the routes I wrap in the `MainAppContainer`.

In the app container, I check whether the user is there in my redux state and redirect the user to the app if true. In the app container I reidrect to login if the user is not there.

The problem is, if I go to the app without logging in, the redirection happens as intended but, only the session container is loaded. The child components are not getting loaded. Any idea why this is happening?

I also tried redirecting only if the path matches. Still, it won't load the child components. If I go to the page directly it loads everything. But if redirected, the child components won't render.
