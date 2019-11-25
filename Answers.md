1. What problem does the context API help solve?

Context API can help keep your data fluctuations clean by using global data instead of local data via props.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions: These are used, or dispatched, to change stored data's state. They include a type and a payload.

Reducers: Reducers take the actions and update the state using whatever the type and payload of the action was.

Store: Where the state is stored. The central data "store". It's called that because that is where all of the stored data in the app originates from. No where else.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is server side data that does not change on a global scale. Component state is mutable data that is set in place with components that server a certain purpose. AS would be useful for large scale apps, especially when collecting common data accross users. CS is better for smaller apps where data is not overflowing.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a middleware for redux that allows asynchronous requests to the server. The key thing is that thunk can return a function to perform the dispatch instead of an action. Asynchronously of course.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Definitely Redux. Having global store of state is so handy and clean. It just seems more practical than reducers for me.
