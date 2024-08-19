export default function info() {
  return(
    <div className="parent">
        <div className="div1">1</div>
        <div className="div2">2</div>
        <div className="div3">3</div>
        <div className="div4">4</div>
        <div className="div5">5</div>
    </div>
  )  
}

/* 

.parent {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(8, 1fr);
    gap: 0.5rem;
}
    
.div1 {
    grid-column: span 5 / span 5;
}

.div2 {
    grid-column: span 3 / span 3;
    grid-column-start: 6;
}

.div3 {
    grid-column: span 5 / span 5;
    grid-row: span 6 / span 6;
    grid-row-start: 2;
}

.div4 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 6;
    grid-row-start: 2;
}

.div5 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 6;
    grid-row-start: 5;
}
        
*/