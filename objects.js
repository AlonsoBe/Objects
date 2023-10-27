const ol = document.querySelector("ol");
const movies = [
    {
        name: "Motorcycle Diaries",
        year: 2004,
        director: "Walter Salles",
        imgsrc: "<a href='https://postimg.cc/gxpwDdBQ' target='_blank'><img src='https://i.postimg.cc/gxpwDdBQ/a3a665a9-f9c1-4a00-a7fa-312286504c40.jpg' border='0' alt='a3a665a9-f9c1-4a00-a7fa-312286504c40'/></a>"
    },
    {
        name: "Black Panther",
        year: 2018,
        director: "Ryan Coogler",
        imgsrc: "<a href='https://postimg.cc/fSLhWCZj' target='_blank'><img src='https://i.postimg.cc/fSLhWCZj/MV5-BMTg1-MTY2-Mj-Yz-NV5-BMl5-Ban-Bn-Xk-Ft-ZTgw-MTc4-NTMw-NDI-V1.jpg' border='0' alt='MV5-BMTg1-MTY2-Mj-Yz-NV5-BMl5-Ban-Bn-Xk-Ft-ZTgw-MTc4-NTMw-NDI-V1'/></a>"
        
    },
    {
        name: "James Bond GoldenEye",
        year: 1995,
        director: "Martin Campbell",
        imgsrc: "<a href='https://postimg.cc/ZvZCw18Y' target='_blank'><img src='https://i.postimg.cc/ZvZCw18Y/MV5-BOWI0-MTJl-Mj-Et-YTI0-ZS00-NWZi-LWE1-Zm-It-Yz-Bl-ZTE5-YTk3-NTJi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEw-NDU1-Mz-Ey-V1.jpg' border='0' alt='MV5-BOWI0-MTJl-Mj-Et-YTI0-ZS00-NWZi-LWE1-Zm-It-Yz-Bl-ZTE5-YTk3-NTJi-Xk-Ey-Xk-Fqc-Gde-QXVy-MTEw-NDU1-Mz-Ey-V1'/></a>"
    }
];
const li = `
    <li>
        <p>Name: ${movies[0].name}</p>
        <p>Year: ${movies[0].year}</p>
        <p>Director: ${movies[0].director}</p>
        ${movies[0].imgsrc}
    </li>

`
const template = movies.map(movies =>`
<li>
    <p>Name: ${movies.name}</p>
    <p>Year: ${movies.year}</p>
    <p>Director: ${movies.director}</p>
    ${movies.imgsrc}
</li>
`);
console.log(template);
ol.innerHTML = template.join('');