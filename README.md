# React practice for Custom Hook

Custom Hook is used to help us clean up our code. Custom Hook can work as a function does, but unlike function, Hooks can be used inside Custom Hook.

Let's say we have 2 components both will do AJAX call to deal with data. one needs to fetch data from DB (GET), the other one need to add data to DB (POST). Also, to handle error might occurs in the process of AJAX, both components need "isLoading" & "error" state to show proper message to users.

If we don't have custom hook, we have to create these 2 states in both components then do AJAX call. However, with custom hook's assistance, we can put 2 states and AJAX call code into custom hook and import the custom hook to 2 component. By doing so, clean up the repetition code in both components.

Backend- Firebase: https://react-starwar-post-default-rtdb.firebaseio.com/task.json
