import React from "react";
import "./Statistics.css";

// function creatElem(data){

//     const list = document.getElementsByClassName("stat-list");

//     list.innerHTML += `<li class="item">
//     <span class="label">${data.label}</span>
//     <span class="percentage">${data.percentage}</span>
//   </li>`;


// }

export const Statistics = (props) => {
    console.log(props.stats);
    props.stats.forEach(data => {
        const list = document.getElementsByClassName("stat-list")[0];
    console.log(list);
    list.innerHTML += `<li class="item">
    <span class="label">${data.label}</span>
    <span class="percentage">${data.percentage}</span>
  </li>`;
    });
    return (
        <section class="statistics">
        <h2 class="title">Upload stats</h2>
      
        <ul class="stat-list">
          <li class="item">
            <span class="label">.docx</span>
            <span class="percentage">4%</span>
          </li>
          
        </ul>
      </section>
    );
  };
  