import React from 'react';
import useTitle from '../../Hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className="py-20 mx-20">
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title text-xl font-semibold">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>
                        There are several ways to handle the state in a react application. Some of them has given below:
                        <br />
                        1. URL:
                        <br />
                        We can use URL to store some data. For examples:
                        <br />
                        # The id of the current item, being viewed
                        <br />
                        # Filter parameters
                        <br />
                        # Pagination offset and limit
                        <br />
                        # Sorting data
                        <br />
                        Keeping such data in the URL allows users to share deep links with others. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change. React Router is a great tool to handle routes and manage the params.
                        <br /><br />

                        2. Web Storage:
                        <br />
                        This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies.
                        Data persisted in the browser is tied to a single browser. So, if the user loads the site in a different browser, the data will not be available.
                        <br /><br />

                        3. Local State:
                        <br />
                        It is useful when one component needs the state.
                        <br /><br />

                        4. Lifted State:
                        <br />
                        Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props.
                        <br /><br />

                        5. Derived State:
                        <br />
                        Sometimes we need to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it.
                    </p>
                </div>
            </div>
            <div tabIndex={1} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title text-xl font-semibold">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>
                        When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”.
                        <br />
                        In programming, we often want to take something and extend it. For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it. Prototypal inheritance is a language feature that helps in that.

                    </p>
                </div>
            </div>
            <div tabIndex={2} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title text-xl font-semibold">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.
                        <br /><br />
                        # Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system.
                        <br />
                        # Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                        <br />
                        # It simplifies the debugging process.
                        <br />
                        # Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        <br />
                        # Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                        <br />
                        # Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.
                        <br />
                        # In the testing pyramid, unit tests are faster than integration and end-to-end. They are more assertive and return quick feedback.
                    </p>
                </div>
            </div>
            <div tabIndex={3} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-4">
                <div className="collapse-title text-xl font-semibold">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        1. Popularity:
                        <br />
                        As “angular” and “react” are common words, it is difficult to grasp their popularity from Google Trends. Though, a good proxy for their popularity is the number of stars that their GitHub repositories get. A sudden shift in the number of stars of Vue occurred in mid-2016 and, recently, Vue has been up there with React among the most popular frameworks.
                        <br /><br />
                        2. Job market:
                        <br />
                        As seen from the trends of late 2018, the number of jobs that require a skill set of Angular or React is roughly the same, whereas that of Vue was still only a fraction of this number (about 20%).
                        <br /><br />
                        3. Community and development
                        <br />
                        When comparing Vue vs React, Vue has a huge number of watchers, stars, and forks. This shows Vue’s popularity among users and its value compared to React. However, the number of contributors for Vue are lower than Angular and React.

                        One possible explanation is that Vue is driven entirely by the open source community, whereas Angular and React have a significant share of Google and Facebook employees contributing to the repositories.

                        From the statistics, all three projects show significant development activity, and this is surely going to continue in the future — just these statistics cannot be the basis of not deciding to use either of them.

                        An additional metric that you’ll want to consider is GitHub’s “Used By” badge, which needs to be enabled by the repository author. This shows how many other repositories on GitHub are dependent on that repository. Angular’s GitHub repo shows 1.7 million, React currently shows almost 5.7 million users, while Vue shows over 167,000 for both of its repos combined. Quite a difference among the three frameworks, but this is largely due to Vue being the newer framework and doesn’t tell the full picture on overall demand.
                        <br /><br />
                        4. Migrations
                        <br />
                        Angular plans major updates every six months. There is also a period of another six months before any major APIs are deprecated, which gives you the time of two release cycles (one year) to make necessary changes, if any.

                        When it comes to Angular vs React, Facebook has stated that stability is of utmost importance to them, as huge companies like Twitter and Airbnb use React. Upgrades through versions are generally the easiest in React, with scripts such as react-codemod helping you to migrate.

                        In the Migration section of the Vue 3 docs, Vue mentions that much is the same between Vue 2 and Vue 3 while 90% of the API is the same if you are migrating from 1.x to 2. There is a Vue 2 to Vue 1 migration helper tool that works on the console to assess the status of your app.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;