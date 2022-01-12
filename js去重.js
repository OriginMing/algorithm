a.replace(/([A-Za-z]+)/gi, 
(match, capture)=> { return capture.split("").reverse().join("")})
