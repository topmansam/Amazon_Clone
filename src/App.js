import React, {useEffect} from "react";
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment'; 
import { initialState, reducer } from './reducer';
import { StateProvider } from './StateProvider';
import { getAuth } from 'firebase/auth';
import { useStateValue } from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js";
 
const promise = loadStripe(
    "pk_test_51NvAduH6RdLXRMYiLJ2eeKh1FQy3luXZeY4H45d72JJtdaiM1tkTQpGk5Rztw7VL5FA0ScGVZEWs2fIaT7LTy1NF00jh1fkFgn"
)
function Layout() {
    return (
        <div>
            <Header />
            <Routes>
    <Route path="/checkout" element={<Checkout />} />
    <Route path="/payment" element={
        <Elements stripe={promise}> 
            <Payment/>
        </Elements>
    }/>
    <Route path="/" element={<Home />} />
</Routes>
        </div>
    );
}
function App() {
    const[{}, dispatch] = useStateValue();

    useEffect(() => {
        // run once when app componet loads
        const unsubscribe = getAuth().onAuthStateChanged(authUser => { // This might also need to be corrected. getAuth doesn't have a property called authUser
            console.log('The user is >>>. ' , authUser); // corrected from getAuth.authUser to authUser

            if(authUser){
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                });
            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                });
            }
        });

        // This will unsubscribe to the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, [dispatch]); // You might need to pass dispatch to the dependency array

    return (
        // <StateProvider initialState={initialState} reducer={reducer}> // If you're not using the StateProvider, you can remove it
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<Layout />} />
                </Routes>
            </Router>
        // </StateProvider>
    );
}
export default App;
