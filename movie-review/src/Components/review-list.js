import React from "react";



let comments = [

    {"Title": "This is my favorite movie!",
    "Year": "02/15/2023"},

    {"Title": "When is the next movie!",
    "Year": "02/14/2023"},

    {"Title": "I would not watch again.",
    "Year": "01/25/2023"},

    {"Title": "Why is it so repetative",
    "Year": "12/05/2022"},

    {"Title": "This Movie made me cry.",
    "Year": "11/27/2022"},

    {"Title": "This Movie is amazing!",
    "Year": "10/02022"}

]

// export default class ReviewList extends React.Component {
//     render() {
//         return(
//             <div>{comments.map}</div>

//              );
//         }
//     }


export default class ReviewList extends React.Component {
    render() {
        return(
            <div className="com">
                <div className="container" >
                <h3>Reviews</h3>
                            </div>
           
            <ul> {comments.map((item, index) => {
                return(

                    <><li className="row" key={index}>
                        <p>
                            {item.Title}</p>
                        <div>
                            {item.Year} </div>

                    </li>
                    <div className="container" >
                            
                        </div></>
                )
            })}

            </ul>
        </div>

        );
    }
}