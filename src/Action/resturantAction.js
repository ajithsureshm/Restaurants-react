
import { RESTURANT_LIST_REQUEST, RESTURANT_LIST_SUCCESS, RESTURANT_LIST_FAIL } from "../Constants/resturantConstants";

import axios from "axios";

import { isAccordionItemSelected } from "react-bootstrap/esm/AccordionContext";

export const listResturants = () => async (dispatch)=>{

    try {
        const {data} = await axios.get('/restaurants.json')

        dispatch({
            type:RESTURANT_LIST_SUCCESS
            payload:data.restaurants
        })
    } 
    catch (error) {
        dispatch({
            type:RESTURANT_LIST_FAIL
            payload:error
        })
    }
}