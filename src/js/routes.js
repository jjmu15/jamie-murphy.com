import VueRouter from 'vue-router';
import store from './store';

// views
import Home from './views/Home.vue';
import About from './views/About.vue';
import Contact from './views/Contact.vue';
import Portfolio from './portfolio/Landing.vue';
import PortfolioProject from './portfolio/Project.vue';
import Blog from './blog/Landing.vue';
import BlogPost from './blog/Post.vue';

import FourOhFour from './views/FourOhFour.vue';


// create router instance
let router = new VueRouter({
    mode: "history",
    linkActiveClass: 'is-active',

    routes: [

      // eg requiring auth below
      // {
      //     path: '/sites/open',
      //     component: OpenSite,
      //     meta: {
      //         requiresAuth: true
      //     }
      // },

        {
            path: '/',
            component: Home,
            children: [
              {
                // will be rendered within the homevue using <router-view>
                path: "/about",
                component: About
              },
              {
                // portfolio
                path: "/portfolio",
                component: Portfolio,
                children: [
                  {
                    path: "polkadot-tiger",
                    name: "pdt",
                    component: PortfolioProject
                  },
                  {
                    path: "the-content-bible",
                    name: "thecontentbible",
                    component: PortfolioProject
                  }
                ]
              },
              {
                // blog
                path: "/blog",
                component: Blog,
                children: [
                  {
                    path: "/blog/:slug",
                    name: "blog-post",
                    component: BlogPost
                  }
                ]
              },
              {
                path: "/contact",
                component: Contact
              }
            ]
        },


        {
            path: '*',
            name: "404",
            component: FourOhFour
        }
    ]
});

// user auth verification for each request
router.beforeEach((to, from, next) => {
    // if route has been specified to require auth
    if(to.matched.some(record => record.meta.requiresAuth)) {
        const now = new Date().toLocaleString();

        // if token is set & not yet expired
        if(store.state.token.value !== null && now < store.state.token.expiryDate) {
            // go to next url
            next();
            return
        }

        // if token not set or is expired, go to login
        next('/login');
    } else {
        // else if route does not require auth, just load view
        next()
    }
})

export default router;
